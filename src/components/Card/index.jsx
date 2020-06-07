import React from "react";
import { useSelector } from "react-redux";
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiText } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";

export default () => {
  const { townsSelected } = useSelector((state) => state.weather);
  if (!townsSelected) return null;
  return (
    <div>
      {townsSelected.map((town) => (
        <EuiFlexGroup gutterSize='l'>
          <EuiFlexItem key={town.id}>
            <EuiCard
              textAlign='center'
              title={town.name}
              description={`— ${town.description} —`}>
              <EuiText size='s'>
                <h2>{town.temperature}º</h2>
                <p>Probabilidad de precipitación:</p>
                <ul>
                  <li>Mañana: {town.rain[1]}%</li>
                  <li>Tarde: {town.rain[2]}%</li>
                  <li>Noche: {town.rain[3]}%</li>
                </ul>
              </EuiText>
            </EuiCard>
          </EuiFlexItem>
        </EuiFlexGroup>
      ))}
    </div>
  );
};
