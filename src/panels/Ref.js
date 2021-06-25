import React from 'react';

import './Persik.css';
import {
	Panel,
	PanelHeader,
	Div,
	Button,
	Group,
	Title,
} from "@vkontakte/vkui";
import {
	Icon28InfoOutline, Icon28LockOpenOutline,
} from "@vkontakte/icons";
import logo from "../img/PNG2.png";


const Top = props => (
	<Panel id={props.id}>
		{props.isDesktop ?
		<PanelHeader
			id="topm"
			separator={props.isDesktop}


		>

		</PanelHeader>
			: "" }
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
					size="l" before={<Icon28InfoOutline  />} stretched onClick={()=>props.setActiveModal("info")}>Manual connect</Button>
				<br />
				<Button
					mode="outline"
					size="m"  onClick={props.resetApp}>Reset connect</Button>
			</Div>

		</Group>
	</Panel>
);
export default Top;
