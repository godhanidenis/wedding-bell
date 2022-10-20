import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import CardInteractive from "../CardInteractive/CardInteractive";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { emptyData, loadProductsStart } from "../../../redux/ducks/product";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ProductCategoriesFilter = ({ setPageSkip }) => {
  const [emptyState, setEmptyState] = useState();
  const { categories } = useSelector((state) => state.categories);

  const [categoryId, setCategoryId] = useState([]);

  const [menCat, setMenCat] = useState([]);
  const [womenCat, setWomenCat] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setCategoryId([...menCat, ...womenCat]);
  }, [menCat, setCategoryId, womenCat]);

  const getFilterProducts = () => {
    if (categoryId.length > 0) {
      setEmptyState(true);
      dispatch(
        loadProductsStart({
          search: "",
          pageData: {
            skip: 0,
            limit: 50,
          },
          filter: { category_id: categoryId },
          pinCode: null,
        })
      );
    }
  };
  console.log("emptyState", emptyState);
  useEffect(() => {
    console.log("categoryId.length :", categoryId.length)
    if (categoryId.length > 0) {
      getFilterProducts();
    } else {
      // setEmptyState(false);
      // setPageSkip(0);
      setPageSkip(0);
      // dispatch(emptyData());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, categoryId.length]);

  // useEffect(() => {
  //   if (emptyState === false) {
  //     dispatch(emptyData());
  //   }
  // }, [dispatch, emptyState]);

  return (
    <CardInteractive
      cardTitle="Categories"
      bottomComponent={
        <>
          <Accordion sx={{ boxShadow: "none" }} className="text-colorBlack">
            <AccordionSummary>
              <Typography>MEN</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Autocomplete
                multiple
                options={categories}
                disableCloseOnSelect
                getOptionLabel={(option) =>
                  option.category_type === "Men" ? option.category_name : ""
                }
                onChange={(event, newValue) => {
                  setMenCat(newValue.map((itm) => itm.id));
                }}
                renderOption={(props, option, { selected }) =>
                  option.category_type === "Men" && (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.category_name}
                    </li>
                  )
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Men's Categories"
                    placeholder="Men's Categories"
                  />
                )}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ boxShadow: "none" }} className="text-colorBlack">
            <AccordionSummary>
              <Typography>WOMEN</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Autocomplete
                multiple
                options={categories}
                disableCloseOnSelect
                getOptionLabel={(option) =>
                  option.category_type === "Women" ? option.category_name : ""
                }
                onChange={(event, newValue) => {
                  setWomenCat(newValue.map((itm) => itm.id));
                }}
                renderOption={(props, option, { selected }) =>
                  option.category_type === "Women" && (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.category_name}
                    </li>
                  )
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Women's Categories"
                    placeholder="Women's Categories"
                  />
                )}
              />
            </AccordionDetails>
          </Accordion>
        </>
      }
    />
  );
};

export default ProductCategoriesFilter;
