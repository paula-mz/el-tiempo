import { EuiComboBox } from "@elastic/eui";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as A from "../../redux/weather/weather.actions";
import "@elastic/eui/dist/eui_theme_light.css";

export default () => {
  const dispatch = useDispatch();
  const { towns } = useSelector((state) => state.towns);
  const { townsSelected } = useSelector((state) => state.weather);
  const [selectedOptions, setSelected] = useState([]);
  const [options, setOptions] = useState([]);

  const onChange = (selectedOptions) => {
    if (selectedOptions.length > townsSelected.length) {
      const lastTown = selectedOptions[selectedOptions.length - 1].id;
      dispatch(A.weatherRequest(lastTown));
    } else {
      const deleteTown = townsSelected.filter(
        (town) => !selectedOptions.some((e) => e.id === town.id)
      );
      const id = deleteTown[0].id;
      dispatch(A.weatherDelete(id));
    }

    setSelected(selectedOptions);
  };

  const onSearchChange = useCallback((searchValue) => {
    setOptions([]);
    setOptions(
      towns.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, []);

  useEffect(() => {
    onSearchChange("");
  }, [onSearchChange]);
  return (
    <EuiComboBox
      fullWidth={true}
      placeholder='Selecciona los municipios'
      async
      options={options}
      selectedOptions={selectedOptions}
      onChange={(e) => onChange(e)}
      onSearchChange={onSearchChange}
    />
  );
};
