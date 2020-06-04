import React from 'react';
import { useSelector } from "react-redux";

export default () => {

	const { townsSelected } = useSelector((state) => state.weather);
	if (!townsSelected) return null
	return (
		<div>
			{townsSelected.map(town=><div key={town.id}><p>Nombre:{town.name}</p><p>Temperatura:{town.temperature}</p></div>)}
		</div>
	)
}
