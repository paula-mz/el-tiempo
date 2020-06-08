import React from "react";
import { useSelector } from "react-redux";
import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiProgress,
  EuiSpacer,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import "./style.css";

export default () => {
  const { townsSelected } = useSelector((state) => state.weather);
  if (!townsSelected) return null;
  return (
    <div>
      {townsSelected.map((town) => (
        <EuiFlexGroup>
          <EuiFlexItem key={town.id}>
            <EuiCard
              className='card'
              display='panel'
              titleElement='span'
              textAlign='center'
              title={town.name}
              description={`— ${town.description} —`}>
              <EuiText size='s'>
                <h2>{town.temperature}º</h2>
                <p>Probabilidad de precipitación de hoy:</p>
                <ul>
                  <li>
                    Mañana: {town.rain[1]}%
                    <EuiProgress
                      value={town.rain[1]}
                      max={100}
                      color='accent'
                      size='s'
                    />
                    <EuiSpacer size='m' />
                  </li>
                  <li>
                    Tarde: {town.rain[2]}%
                    <EuiProgress
                      value={town.rain[2]}
                      max={100}
                      color='primary'
                      size='s'
                    />
                    <EuiSpacer size='m' />
                  </li>
                  <li>
                    Noche: {town.rain[3]}%
                    <EuiProgress
                      value={town.rain[3]}
                      max={100}
                      color='subdued'
                      size='s'
                    />
                    <EuiSpacer size='m' />
                  </li>
                </ul>
              </EuiText>
            </EuiCard>
          </EuiFlexItem>
        </EuiFlexGroup>
      ))}
    </div>
  );
};
