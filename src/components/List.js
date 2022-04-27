import styled from "styled-components"

const StyledList = styled.ul`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 3 / 6;
	/* align-self: center; */
	list-style: inherit;
	&.moeglichkeiten {
		display: none;
	}
	li {
		font-size: 1.5rem;
		margin-left: 1.2rem;
		margin-bottom: 1rem;
		line-height: 1.2;
		font-weight: 300;
	}
`

const List = (props) => {
	return (
		<StyledList>
			{props.data.map((value, index) => (
				<li key={index}>{value}</li>
			))}
		</StyledList>
	)
}

export default List
