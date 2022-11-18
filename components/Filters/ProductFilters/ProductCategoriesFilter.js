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
import { changeAppliedProductsFilters } from "../../../redux/ducks/productsFilters";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ProductCategoriesFilter = ({ setProductPageSkip }) => {
  const { categories } = useSelector((state) => state.categories);

  const [menCategoryLabel, setMenCategoryLabel] = useState([]);
  const [womenCategoryLabel, setWomenCategoryLabel] = useState([]);

  const [selectedMenCat, setSelectedMenCat] = useState([]);
  const [selectedWomenCat, setSelectedWomenCat] = useState([]);

  const [menSelectedData, setMenSelectedData] = useState([]);
  const [womenSelectedData, setWomenSelectedData] = useState([]);

  const [categoryId, setCategoryId] = useState([]);

  const [abc, setAbc] = useState(false);

  const dispatch = useDispatch();
  const productsFiltersReducer = useSelector(
    (state) => state.productsFiltersReducer
  );

  useEffect(() => {
    setCategoryId([...menSelectedData, ...womenSelectedData]);
  }, [menSelectedData, setCategoryId, womenSelectedData]);

  useEffect(() => {
    abc &&
      dispatch(
        changeAppliedProductsFilters({
          key: "categoryId",
          value: {
            selectedValue: categoryId,
          },
        })
      );
  }, [abc, categoryId, dispatch]);

  useEffect(() => {
    productsFiltersReducer.appliedProductsFilters &&
      setSelectedMenCat(
        productsFiltersReducer.appliedProductsFilters.categoryId.selectedValue
          .map((itm) => categories.find((i) => i.id === itm))
          .filter((ele) => ele.category_type === "Men")
          .map((i) => i.category_name)
      );

    setSelectedWomenCat(
      productsFiltersReducer.appliedProductsFilters.categoryId.selectedValue
        .map((itm) => categories.find((i) => i.id === itm))
        .filter((ele) => ele.category_type === "Women")
        .map((i) => i.category_name)
    );
  }, [categories, productsFiltersReducer.appliedProductsFilters]);

  useEffect(() => {
    setMenCategoryLabel(
      categories
        .filter((itm) => itm.category_type === "Men")
        .map((i) => i.category_name)
    );
    setWomenCategoryLabel(
      categories
        .filter((itm) => itm.category_type === "Women")
        .map((i) => i.category_name)
    );
  }, [categories]);

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
                options={menCategoryLabel}
                disableCloseOnSelect
                getOptionLabel={(option) => option}
                onChange={(event, newValue) => {
                  setSelectedMenCat(newValue);
                  setProductPageSkip(0);
                  setAbc(true);
                  setMenSelectedData(
                    newValue.map(
                      (itm) =>
                        categories.find((ele) => ele.category_name === itm)?.id
                    )
                  );
                }}
                value={selectedMenCat}
                renderOption={(props, option, { selected }) =>
                  option && (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
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
                options={womenCategoryLabel}
                disableCloseOnSelect
                getOptionLabel={(option) => option}
                onChange={(event, newValue) => {
                  setSelectedWomenCat(newValue);
                  setProductPageSkip(0);
                  setAbc(true);
                  setWomenSelectedData(
                    newValue.map(
                      (itm) =>
                        categories.find((ele) => ele.category_name === itm)?.id
                    )
                  );
                }}
                value={selectedWomenCat}
                renderOption={(props, option, { selected }) =>
                  option && (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
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
