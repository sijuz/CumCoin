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
	Icon28ChevronBack, Icon28CopyOutline, Icon28DoorArrowLeftOutline, Icon28GiftOutline, Icon28LockOpenOutline,
	Icon28LogoVk,
	Icon28RefreshOutline, Icon28SyncOutline,
	Icon56CheckCircleOutline,
	Icon56Users3Outline
} from "@vkontakte/icons";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {
	FacebookMessengerShareButton,
	FacebookShareButton, RedditShareButton,
	TelegramShareButton,
	TwitterShareButton, VKShareButton,
	WhatsappShareButton
} from "react-share";

import {
	EmailIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	HatenaIcon,
	InstapaperIcon,
	LineIcon,
	LinkedinIcon,
	LivejournalIcon,
	MailruIcon,
	OKIcon,
	PinterestIcon,
	PocketIcon,
	RedditIcon,
	TelegramIcon,
	TumblrIcon,
	TwitterIcon,
	ViberIcon,
	VKIcon,
	WeiboIcon,
	WhatsappIcon,
	WorkplaceIcon
} from "react-share";

import TwitterLogin from "react-twitter-login";
import logo from "../img/logo.png";
import logo2 from "../img/PNG2.png";
import {ReCAPTCHA} from "react-google-recaptcha";

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
					<img src={logo2} width="80px" alt=""/>
				</p>
			}
		</PanelHeader>

		<Group >


			<Div>
				{props.userInfo ? props.userInfo.airdrop_balance >= 10000000000 ?
					<div>
						<Title level="2" weight="heavy" style={{
							marginBottom: 0,
							textAlign: 'center'
						}}>Airdrop has been successfully credited to your balance</Title>
						<p style={{
							textAlign: 'center'
						}}>
						Wait for the end of the airdrop to withdraw CUM to your wallet
						</p>
						<Button size={"l"} stretched before={<Icon28LockOpenOutline/>}
								disabled>Pay fee</Button>
					</div>
					:
					<div>
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


							{props.userTG ?
								<Button size={"l"} before={<Icon24Send/>} mode="commerce" target="_blank"
										href="https://t.me/cumcoinlive">Telegram subscribe</Button>
								:
								<div className="bot2">
									<TelegramLoginButton dataOnauth={(res) => {
										props.setuserTG(res)
									}} botName="cum_coin_airdrop_bot"/>
								</div>
							}

							{/*<Button size={"l"}   before={<Icon24Send   />} mode="commerce" id="telegramButton">Telegram</Button>*/}
							<p/>

							<Button size={"l"} before={<Icon24LogoTwitter/>} mode="commerce" target="_blank"
									href="https://twitter.com/CUMCoinTeam" onClick={() => {setTimeout(()=>props.settwBtn(true),1000)}}>Twitter
								subscribe</Button>
							<p/>
							<ReCAPTCHA
								sitekey="6LdNUVUbAAAAAB0IwXlpMFXrwMCsslJoqUR12jW7"
								onChange={props.onChangeCaptcha}
								theme={"dark"}
								size={"normal"}
							/>
							{props.ConnectedWEB3 ?

								<Button size={"l"} stretched before={<Icon28GiftOutline/>}
										disabled={!(props.userTG && props.twBtn)} onClick={props.getCUM}>Get 100
									CUM</Button>
								:
								<Button size={"l"} stretched before={<Icon28LockOpenOutline/>}
										onClick={props.loginWEB3}>Unlock Wallet</Button>
							}
						</div>

					</div>
					:
					<div>

					</div>
				}
				<br />
				<CardGrid size="l">
					<Card>
						<Div>
							<Title level="2" weight="heavy" style={{
								marginBottom: 0,
								textAlign: 'center'
							}}>AirDrop info</Title>

							<p>
								You will receive coins to the balance of the airdrop app. After finishing airdrop you will need to come back here and pay the fee for getting CUM to your Smart Chain(bep20) crypto wallet.
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
			}}>AirDrop referral system</Title>
			<p style={{
				textAlign: 'center',
				marginBottom: 0,
				paddingBottom: 0
			}}>Invite people to airdrop with your referral link and get 50 CUM for peer referral to app balance</p>

				<br />
				<Input type="text" value={"https://app.cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)} align="center" />
			<br />
			<CopyToClipboard text={"https://app.cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)}
							 onCopy={props.onCopy}>
				<Button
					mode="outline"
					size="l" stretched before={<Icon28CopyOutline  />}>{props.copyText} Link</Button>
			</CopyToClipboard>
				<br />
				<div style={{display: "flex", justifyContent: "space-between", width: "60%", margin: "0 auto"}}>
					<FacebookShareButton
						url={"https://app.cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)}
						quote={"CUM Coin AirDrop"}
						className="Demo__some-network__share-button"
					>
						<FacebookIcon size={32} round />
					</FacebookShareButton>
					<TwitterShareButton
						url={"https://app.cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)}
						title={"CUM Coin AirDrop"}
						className="Demo__some-network__share-button"
					>
						<TwitterIcon size={32} round />
					</TwitterShareButton>
					<TelegramShareButton
						url={"https://app.cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)}
						title={"CUM Coin AirDrop"}
						className="Demo__some-network__share-button"
					>
						<TelegramIcon size={32} round />
					</TelegramShareButton>
					<RedditShareButton
						url={"https://app.cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)}
						title={"CUM Coin AirDrop"}
						windowWidth={660}
						windowHeight={460}
						className="Demo__some-network__share-button"
					>
						<RedditIcon size={32} round />
					</RedditShareButton>
					<WhatsappShareButton
						url={"https://app.cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)}
						title={"CUM Coin AirDrop"}
						separator=":: "
						className="Demo__some-network__share-button"
					>
						<WhatsappIcon size={32} round />
					</WhatsappShareButton>
					<VKShareButton
						url={"https://app.cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)}
						image={`${String(window.location)}/${logo}`}
						className="Demo__some-network__share-button"
					>
						<VKIcon size={32} round />
					</VKShareButton>
				</div>
				<br />



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
