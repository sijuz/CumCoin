import React from 'react';
import PropTypes from 'prop-types';

import './Persik.css';
import {
	Avatar,
	SimpleCell,
	Spinner,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Div,
	PanelHeaderButton,
	PanelHeaderContent,
	List,
	RichCell,
	Button,
	Group,
	Link,
	Footer,
	FormItem,
	Input,
	Cell,
	Card,
	Title, CardGrid, Separator
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack, Icon28DoorArrowLeftOutline, Icon28InfoOutline, Icon28LockOpenOutline,
	Icon28LogoVk,
	Icon28RefreshOutline, Icon28SyncOutline,
	Icon28Users3Outline,
	Icon56ArchiveOutline, Icon56CheckCircleOutline, Icon56MailOutline, Icon56Users3Outline
} from "@vkontakte/icons";
import logo from "../img/PNG2.png";
import logo2 from "../img/logo.png";

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}



const Top = props => (
	<Panel id={props.id}>
		<PanelHeader
			id="topm"
			separator={false}

		>
			{props.isDesktop ? null :
				<p style={{textAlign: "center", width: "95vw"}}>
					<img src={logo} width="80px" alt=""/>
				</p>
			}

		</PanelHeader>
		<Group >

			<div>
				<CardGrid size="l">
					<Card>
						<Div style={{textAlign: 'center'}}>
							<small style={{opacity: '.7'}}>AirDrop balance</small>
							<Title level="1" weight="heavy" style={{
								marginBottom: 0,
								textAlign: 'center'
							}}>{props.userInfo ? (props.userInfo.airdrop_balance / Math.pow(10, 8)).toFixed(0) : 0} CUM</Title>

							<small style={{opacity: '.7'}}>Left until accrual</small>

							<Title level="3" weight="heavy" style={{
								marginBottom: 0,
								textAlign: 'center'
							}}>7 d 14 h 21 m </Title>

						</Div>

					</Card>
					<Card>
						<Cell
							description="BEP20"
							onClick={()=>props.setActiveModal("wallet")}
							after={props.address ? props.address.substr(0, 4)+"..."+props.address.substr(props.address.length-4, props.address.length-1) : ""}
							before={
								<Avatar src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"} size={28} />
							}
						>
							Your address
						</Cell>
					</Card>
					<Card>
						<Cell
							description={"CUM/BUSD"}
							after={props.priceCUM > 0 ? "$" + props.priceCUM : "$0.00000000"}
							before={
								<Avatar src={logo2} size={28} />
							}
						>
							Price
						</Cell>
					</Card>
					<Card>
						{props.Coins.length > 0 ? props.Coins.map((coin,key)=> (
							<Cell
								key={key}
								description={coin.name === "CUM" ? (parseFloat(coin.price)).toFixed(8) + " $" : (parseFloat(coin.price)).toFixed(2) + " $"}
								after={
									<div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center"}}>
										<div>{coin.balance + " " + coin.name}</div>
										<div style={{opacity: '.7'}}>{(parseFloat(coin.price) * parseFloat(coin.balance)).toFixed(2) + " $" }</div>
									</div>
								}
								before={
									<Avatar src={coin.ico} size={28} />
								}
							>
								{coin.label}
							</Cell>
						)) : null}

					</Card>


				</CardGrid>

				<Div>
					<Button
					mode="outline"
					size="l" stretched before={<Icon28DoorArrowLeftOutline  />} onClick={props.resetApp}>Log out</Button>
				</Div>




			</div>


		</Group>
	</Panel>
);
export default Top;
