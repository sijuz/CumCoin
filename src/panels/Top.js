import React from 'react';
import PropTypes from 'prop-types';
import TelegramLoginButton from 'react-telegram-login';
import ReactDOM from 'react-dom';

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
	Card,
	Title,
	CardGrid,
	Tabs,
	TabsItem, FormItem, Input
} from "@vkontakte/vkui";
import {
	Icon24LogoTwitter, Icon24Send,
	Icon28ChevronBack, Icon28DoorArrowLeftOutline, Icon28LockOpenOutline,
	Icon28LogoVk,
	Icon28RefreshOutline, Icon28SyncOutline,
	Icon56CheckCircleOutline,
	Icon56Users3Outline
} from "@vkontakte/icons";
import logo from "../img/PNG2.png";
// import TwitterLogin from "react-twitter-login";


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const authHandler = (err, data) => {
	console.log(err, data);
};

const handleTelegramResponse = response => {
	console.log("TG:",response);
};


const Top = props => (
	<Panel id={props.id}>
		<PanelHeader
			id="topm"
			separator={props.isDesktop}
			right={
				props.isDesktop ?
				<Button
					mode="outline"
					size="l"  before={<Icon28DoorArrowLeftOutline  />} onClick={props.resetApp}>Log out</Button>
					:
					null
			}

		>
			{props.isDesktop ? null :
				<p style={{textAlign: "center", width: "95vw"}}>
					<img src={logo} width="80px" alt=""/>
				</p>
			}
		</PanelHeader>

		<Group >


			<Div>
				<Title level="2" weight="heavy" style={{
					marginBottom: 0,
					textAlign: 'center'
				}}>To get an airdrop of 100 CUM you need to follow these steps:</Title>


				<p style={{
					textAlign: 'center'
				}}>Log in and subscribe to our social networks</p>
				<div style={{textAlign: "center"}}>

					{/*<TwitterLogin*/}
					{/*	authCallback={authHandler}*/}
					{/*	consumerKey={"1"}*/}
					{/*	consumerSecret={"1"}*/}
					{/*	requestTokenUrl={"1"}*/}
					{/*	accessTokenUrl={"1"}*/}
					{/*/>*/}

					<TelegramLoginButton dataOnauth={handleTelegramResponse} botName="cum_coin_airdrop_bot" />

					<Button size={"l"}   before={<Icon24Send   />} mode="commerce" id="telegramButton">Telegram</Button>
					<p />
					<Button size={"l"}   before={<Icon24LogoTwitter  />} mode="commerce" >Twitter</Button>
					<p />
					{props.ConnectedWEB3 ?

						<Button size={"l"} stretched before={<Icon28SyncOutline/>} disabled>Get 100 CUM</Button>
						:
						<Button size={"l"} stretched before={<Icon28LockOpenOutline />} onClick={props.loginWEB3}>Unlock Wallet</Button>
					}
				</div>

				<br />
				<CardGrid size="l">
					<Card>
						<Div>
							<Title level="2" weight="heavy" style={{
								marginBottom: 0,
								textAlign: 'center'
							}}>Info airdrop</Title>

							<p>
								You get coins on the balance of the airdrop and after the end of the airdrop, the coins will be sent to everyone on the wallet. You will only need to pay the transfer fee.
							</p>
						</Div>
					</Card>
				</CardGrid>
			</Div>

		</Group>

		<Group style={{minHeight: '20vh'}}>
			<Div>
			<Title level="2" weight="heavy" style={{
				marginBottom: 0,
				textAlign: 'center'
			}}>Referral system airdrop</Title>
			<p style={{
				textAlign: 'center',
				marginBottom: 0,
				paddingBottom: 0
			}}>Invite people to airdrop on your referral link and get 50 CUM for 1 referral</p>
			<FormItem >
				<Input type="text" value={"https://cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)} align="center" />
			</FormItem>


				<CardGrid size="m">
					<Card>
						<RichCell
							disabled
						>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
								<Icon56Users3Outline/>
								<p style={{margin: 0, textAlign: 'center', overflowWrap: "break-word"}}>
									Your referrals
								</p>
								<Title level="1" weight="semibold"
									   style={{marginBottom: 16}}>{props.userInfo ? props.userInfo.my_refs_count : 0}</Title>

							</div>
						</RichCell>
					</Card>

					<Card>
						<RichCell
							disabled
						>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
								<Icon56CheckCircleOutline />
								<p style={{margin: 0, textAlign: 'center', overflowWrap: "break-word"}}>
									Received
								</p>
								<Title level="1" weight="semibold" style={{marginBottom: 16}}>
									{props.userInfo ? props.userInfo.my_refs_count*50 : 0} CUM
								</Title>

							</div>
						</RichCell>
					</Card>
				</CardGrid>

			</Div>


		</Group>

		{props.isDesktop ? null :
			<div>
				<br />
				<br/>
			</div>
		}

	</Panel>
);
export default Top;
