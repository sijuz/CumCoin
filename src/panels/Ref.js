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
	Title, CardGrid
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack, Icon28DoorArrowLeftOutline, Icon28InfoOutline, Icon28LockOpenOutline,
	Icon28LogoVk,
	Icon28RefreshOutline,
	Icon28Users3Outline,
	Icon56ArchiveOutline, Icon56CheckCircleOutline, Icon56MailOutline, Icon56Users3Outline
} from "@vkontakte/icons";
import logo from "../img/PNG2.png";

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}



const Top = props => (
	<Panel id={props.id}>
		<PanelHeader
			id="topm"
			separator={props.isDesktop}


		>

		</PanelHeader>
		<Group style={{minHeight: '20vh'}}>
			<Div>
				<p style={{textAlign: "center",margin: 0}}>
					<img src={logo}  width="150px" alt="" />

				</p>
				<Title  style={{textAlign: "center",marginTop: 0}} level="1" weight="heavy"
				>Connect to a wallet</Title>

				<br />
				<Button size={"l"} stretched before={<Icon28LockOpenOutline />} onClick={()=>props.loginWEB3(props.web3Modal)}>Connect</Button>

				<br />
				<Button
					mode="outline"
					size="l" before={<Icon28InfoOutline  />} stretched >Manual connect</Button>
				<br />
				<Button
					mode="outline"
					size="m"  onClick={props.resetApp}>Reset connect</Button>
			</Div>

		</Group>
	</Panel>
);
export default Top;
