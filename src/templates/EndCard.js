import styled from "styled-components"

const Members = styled.div`
	grid-column: 2 / 12;
	grid-row: 11 / 12;
	ul {
		display: flex;
		li {
			transition: 0.2s ease-in-out;
			/* text-align: center; */
			font-size: 1.1rem;
			font-weight: 100;
			line-height: 1.4;
			margin-right: 1rem;
			color: rgba(255, 255, 255, 0.5);

			:nth-of-type(1) {
				:hover {
					cursor: pointer;
					color: #ea5b89;
				}
			}
			:nth-of-type(2) {
				:hover {
					cursor: pointer;
					color: coral;
				}
			}
			:nth-of-type(3) {
				:hover {
					cursor: pointer;
					color: #f6f179;
				}
			}
			:nth-of-type(4) {
				:hover {
					cursor: pointer;
					color: #437ef1;
				}
			}
			:nth-of-type(5) {
				:hover {
					cursor: pointer;
					color: #65d677;
				}
			}
		}
	}
`

const Title = styled.div`
	/* outline: 1px solid white; */
	grid-column: 2 / 12;
	grid-row: 2 / 5;
	justify-self: center;
	ul {
		li {
			text-align: center;
			font-size: 1rem;
			font-weight: 100;
			line-height: 1.4;
		}
	}
`

const EndCard = (props) => {
	return (
		<>
			<Members>
				<ul>
					{props.members.map((value, index) => {
						return <li key={index}>{value}</li>
					})}
				</ul>
			</Members>
		</>
	)
}

export default EndCard
