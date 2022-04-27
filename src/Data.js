import { useState } from "react"

import styled from "styled-components"
import Card from "./components/Card"

import Title from "./components/Title"
import SubTitle from "./components/SubTitle"
import Headline from "./components/Headline"
import List from "./components/List"

import rfidLogo from "../src/images/rfid-logo.png"
import nfcLogo from "../src/images/nfc-logo.png"

import schaubild1 from "../src/images/schaubild-1.png"
import schaubild2 from "../src/images/schaubild-2.png"
import schaubild3 from "../src/images/schaubild-3.png"
import schaubild4 from "../src/images/schaubild-4.png"

import admissionControl from "../src/images/admission-control.jpg"
import container from "../src/images/container.jpg"
import cow from "../src/images/cow.jpg"
import jordan from "../src/images/jordan.jpg"
import maut from "../src/images/maut.jpg"
import passport from "../src/images/passport.jpg"
import pay from "../src/images/pay.jpg"
import supermarket from "../src/images/supermarket.jpg"

import esp from "../src/images/esp.png"

import rfidStock from "../src/images/rfid-stock.jpg"
import lesegeraet from "../src/images/lesegeraet.jpg"
// - Aufzählung, Stichpunkte
// - Bild
// - Bild Slideshow
// - Nfc server support?
// - Bar code zur website in der endcard

import EndCard from "./templates/EndCard"

import Keys from "./components/Keys"
import Gallery from "./components/Gallery"

const StyledText = styled.p`
	/* outline: 1px solid white; */
	grid-column: 7 / 12;
	grid-row: 6 / 11;
	font-size: 1.5rem;

	line-height: 1.2;
	font-weight: 300;
`

const StyledCard = styled.div`
	grid-column: 2 / 12;
	grid-row: 6 / 11;
	display: flex;
	column-gap: 4rem;

	> div {
		background: rgb(25, 26, 27);
		border-radius: 0.5rem;
		height: 100%;
		width: 100%;
		> h3 {
			font-size: 2rem;
			margin: 2rem;
		}
		ul {
			list-style: inherit;
			margin: 2rem;
			font-size: 1.2rem;
			margin-left: 2.5rem;
			line-height: 1.2;
			li {
				margin-bottom: 0.5rem;
			}
		}
	}
`

const Table = styled.table`
	grid-row: 3 / 12;
	grid-column: 2 / 12;
	border-spacing: 1rem;
	width: 100%;
	table-layout: fixed;
	margin-left: -1rem;
	tr {
		/* white-space: nowrap; */
		line-height: 1.2;
		td:first-of-type {
			/* text-align: right; */
		}
		th,
		td {
			/* outline: 1px solid white; */
			font-size: 1.5rem;
			will-change: auto;
			vertical-align: middle;
			font-weight: 100;
		}
		th {
			font-weight: 400;
			color: cornflowerblue;
		}
	}
`

const Data = () => {
	const [current, setcurrent] = useState(0)
	const [functionCurrent, setFunctionCurrent] = useState(0)
	const [exampleCurremt, setExampleCurrent] = useState(0)
	const [espCurrent, setEspCurrent] = useState(0)

	const images = [rfidStock, rfidLogo, nfcLogo, lesegeraet]
	const schaubilder = [
		schaubild1,
		schaubild2,
		schaubild3,
		schaubild4,
		schaubild4,
		schaubild4,
	]
	const examples = [
		admissionControl,
		container,
		cow,
		jordan,
		maut,
		passport,
		pay,
		supermarket,
	]

	const subText = [
		"NFC / RFID - Lesegerät liest Daten aus einer Smartcard aus.",
		"Reader-Emulation: Ein Smartphone liest Daten aus einem NFC Tag aus. Smartphone -> NFC/RFID Lesegerät",
		"Card-Emulation: Ein NFC - Lesegerät liest Daten aus einem Smartphone. Smartphone -> Smartcard",
		"Beide NFC Geräte befinden sich im aktiven Modus und kommunizieren miteinander.",
		"Passive Mode: Nur der Initiator erzeugt Frequenzen (überträgt Daten) und das Target empfängt diese und interpretiert sie. Das Target überträgt dann seine Daten an den Initiator.",
		"Aktive Mode: Beide NFC-Geräte sind Initiator und erzeugen Frequenzen. Sie können Daten senden und empfangen. Die Übertragen geschiet nacheinander.",
	]

	const subList = [
		// allgemein
		[
			"sind gobale und draht- bzw. kabellose Kommunikation-Technologien",
			"Austausch von Daten und Informationen",
		],
		// rfid
		[
			"Radio-Frequency Identification",
			"Niederfrequenz (LF)",
			"Hochfrequenz (HF)",
			"Ultrahochfrequenz (UHF)",
		],
		[
			"Near-Field-Communication",
			"Das Lesegerät agiert nicht nur als Lesegerät, sondern auch als Tag (Card Emulation)",
			"Außerdem ist eine Peer to Peer Kommunikation möglich.",
		],
		[
			"Lesegerät und Transponder",
			"Transpoder (Tags) gibt es in aktiver und passiver Form Die aktive Tags beinhalten eine eigene Stromquelle, passive Tags hingegen werden über den Reader mit Energie versorgt.",
			"LF & HF -> wenige Zentimeter; UHF -> bis zu über einem Meter",
		],
	]

	const SubText = styled.p`
		/* outline: 1px solid red; */
		align-self: center;
		font-weight: 100;
		line-height: 1.3;
		grid-column: 7 / 12;
		grid-row: 3 / 11;
		font-size: 1.5rem;
	`

	const SubList = styled.ul`
		grid-column: 7 / 12;
		grid-row: 3 / 11;
		align-self: center;
		list-style: inherit;
		li {
			font-size: 1.5rem;
			margin-left: 1.2rem;
			margin-bottom: 1rem;
			line-height: 1.2;
			font-weight: 300;
		}
	`

	return (
		<>
			<Card>
				<Title value="RFID & NFC" />
				<SubTitle value="Endlich wieder etwas Nähe" />
				<Keys />
			</Card>
			<Card>
				<Headline value="Was sind RFID und NFC?" />
				<Gallery
					current={current}
					images={images}
					setcurrent={setcurrent}
					max={images.length}
				/>
				<SubList>
					{subList[current].map((value) => (
						<li>{value}</li>
					))}
				</SubList>
				{/* <SubText>{subText[current]}</SubText> */}
				{/* 
            // Gallery
            // List
        
        */}
			</Card>

			<Card>
				<Headline value="Funktionsweise"></Headline>
				<Gallery
					current={functionCurrent}
					images={schaubilder}
					setcurrent={setFunctionCurrent}
					max={schaubilder.length}
				/>
				<SubText>{subText[functionCurrent]}</SubText>
			</Card>
			<Card>
				<Headline value="RFID & NFC Frequenzbereiche" />
				<Table>
					<thead>
						<tr>
							<th></th>
							<th>Low Frequency</th>
							<th>High Frequency</th>
							<th>Ultra High Frequency</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Frequenz-bereich</td>
							<td>125kHz – 135 kHz</td>
							<td>13,56 MHz</td>
							<td>860 MHz – 960 MHz</td>
						</tr>
						<tr>
							<td>Energieversorgung </td>
							<td>passiv</td>
							<td>passiv</td>
							<td>passiv & aktiv</td>
						</tr>
						<tr>
							<td>Reichweite</td>
							<td>max. 0,30 m </td>
							<td>max. 1,50 m </td>
							<td>
								passiv: max. 3 m <br />
								aktiv: bis 30 m
							</td>
						</tr>
						<tr>
							<td>Übertragungsrate </td>
							<td>gering </td>
							<td>mittel</td>
							<td>hoch</td>
						</tr>
						<tr>
							<td>Verwendung</td>
							<td>
								Hotelkarten, Zugangskontrollen,
								Tieridentifikation
							</td>
							<td>
								NFC; kontaktloses Bezahlen, Perso, Reisepass
							</td>
							<td>Waren- logistik</td>
						</tr>
						<tr>
							<td>
								Abschirmung durch handelsübliche Blocker
								(Alufolie)
							</td>
							<td>no</td>
							<td>yes</td>
							<td>yes</td>
						</tr>
						<tr>
							<td>Abschir- mung durch Cryptalloy</td>
							<td>yes</td>
							<td>yes</td>
							<td>yes</td>
						</tr>
					</tbody>
				</Table>
			</Card>

			<Card>
				<Headline value="Möglichkeiten" />
				<StyledText>
					Suchen, Identifizieren, Verfolgen und Kommunizieren mit
					Gegenständen und Personen.
				</StyledText>

				<Gallery
					current={exampleCurremt}
					images={examples}
					setcurrent={setExampleCurrent}
					max={examples.length}
					className="realuse"
				/>
			</Card>
			<Card>
				<Headline value="Vorteile" />
				<List
					data={[
						"Daten lassen sich direkt auf Chip speichern, eine externe Datenbank ist nicht notwendig",
						"Transponder lassen sich leicht in Produkte oder Verpackungen integrieren",
						"kein direkter Kontakt nötig",
						"Tags oft passiv, benötigen keine Stromquelle",
					]}
				/>
				<StyledCard>
					<div>
						<h3>RFID</h3>
						<ul>
							<li>Sehr hohe Reichweite möglich</li>
							<li>
								Wird bereits in vielen verschiedenen Branchen
								angewandt
							</li>
							<li>
								Lesegeräte können mehrere Chips gleichzeitig
								identifizieren
							</li>
						</ul>
					</div>
					<div>
						<h3>NFC</h3>
						<ul>
							<li>
								Systeme reagieren auch bei Umwelteinflüssen
								zuverlässig
							</li>
							<li>Nahezu 100%ige Erstleserate</li>
							<li>
								NFC-Chips können untereinander kommunizieren
							</li>
							<li>
								Besitzt massives Sicherheitsprotokoll und kann
								zusätzlich auf SSL setzen
							</li>
						</ul>
					</div>
				</StyledCard>
			</Card>
			<Card>
				<Headline value="Nachteile" />
				<List
					data={[
						"Produkte, die einen hohen Anteil an Metall oder Wasser haben, bewirken eine Störung des elektromagnetischen Feldes → Daten lassen sich häufig nicht richtig auslesen",
						"Unklarer Umgang mit Störsignalen, die (absichtlich) ausgesendet werden",
					]}
				/>
				<StyledCard>
					<div>
						<h3>RFID</h3>
						<ul>
							<li>
								Kosten für Umrüstung und Transponder relativ
								hoch
							</li>
							<li>
								Datenschutz schwierig, da theoretisch jeder
								Nutzer eines RFID-Lesers die gespeicherten Daten
								auslesen kann
							</li>
							<li>
								je höher Reichweite, desto Störanfälliger und
								teurer
							</li>
						</ul>
					</div>
					<div>
						<h3>NFC</h3>
						<ul>
							<li>
								Gehäufter Einsatz bei sensiblen Daten schafft
								Sicherheitslücken
							</li>
							<li>Nur sehr kurze Distanzen</li>
						</ul>
					</div>
				</StyledCard>
			</Card>
			<Card>
				<Headline value="Implementierung" />
				<Gallery
					current={espCurrent}
					images={[esp]}
					setcurrent={setEspCurrent}
					max="1"
					className="realuse"
				/>
				<StyledText>
					https://github.com/ericgoe/iot-expertengruppe
				</StyledText>
			</Card>

			<Card>
				<Title value="Vielen Dank für Ihre Aufmerksamkeit!" />
				<SubTitle value="Fragen?" />
				<EndCard
					members={[
						"Bryan Hogan",
						"Eric Goerens",
						"Marcel Grund",
						"Calvin Hinzer",
						"Lisa Fuhrmann",
					]}
				/>
			</Card>
		</>
	)
}

export default Data
