import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import CardInteractive from "../CardInteractive/CardInteractive";

const ProductCategoriesFilter = () => {
  const mensCategories = [
    { label: "All", value: "All" },
    { label: "Blazer", value: "Blazer" },
    { label: "Suit", value: "Suit" },
    { label: "Sherwani", value: "Sherwani" },
    { label: "Kurta", value: "Kurta" },
    { label: "IndoWestern", value: "IndoWestern" },
  ];
  const womensCategories = [
    { label: "All", value: "All" },
    { label: "Choli", value: "Choli" },
    { label: "Kurti", value: "Kurti" },
    { label: "Lehanga", value: "Lehanga" },
  ];

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
              <FormGroup onChange={(e) => console.log(e.target.value)}>
                {mensCategories.map((itm) => (
                  <FormControlLabel
                    key={itm.value}
                    control={<Checkbox />}
                    label={itm.label}
                    value={itm.value}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ boxShadow: "none" }} className="text-colorBlack">
            <AccordionSummary>
              <Typography>WOMEN</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup onChange={(e) => console.log(e.target.value)}>
                {womensCategories.map((itm) => (
                  <FormControlLabel
                    key={itm.value}
                    control={<Checkbox />}
                    label={itm.label}
                    value={itm.value}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </>
      }
    />
  );
};

export default ProductCategoriesFilter;
