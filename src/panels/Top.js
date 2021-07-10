import React from 'react';
import TelegramLoginButton from 'react-telegram-login';

import './Persik.css';
import {
	Panel,
	PanelHeader,
	Div,
	RichCell,
	Button,
	Group,
	Card,
	Title,
	CardGrid, Input
} from "@vkontakte/vkui";
import {
	Icon24LogoTwitter,
	Icon24Send, Icon28CheckCircleFill,
	Icon28CopyOutline,
	Icon28DoorArrowLeftOutline, Icon28ErrorCircleOutline,
	Icon28GiftOutline,
	Icon28LinkCircleOutline,
	Icon28LockOpenOutline,
	Icon56CheckCircleOutline,
	Icon56Users3Outline
} from "@vkontakte/icons";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {
	FacebookShareButton, RedditShareButton,
	TelegramShareButton,
	TwitterShareButton, VKShareButton,
	WhatsappShareButton
} from "react-share";

import {
	FacebookIcon,
	RedditIcon,
	TelegramIcon,
	TwitterIcon,
	VKIcon,
	WhatsappIcon,
} from "react-share";

import logo from "../img/logo.png";
import logo2 from "../img/PNG2.png";
import Reaptcha from "reaptcha";
import * as moment from "moment";


let endairdrop = true;


const Top = props => (
	<Panel id={props.id}>
		<PanelHeader
			id="topm"
			separator={props.isDesktop}
			right={
				props.isDesktop ?
					props.userInfo ?
						<Button
							mode="outline"
							size="l"  before={<Icon28DoorArrowLeftOutline  />} onClick={props.resetApp}>Log out</Button>
						:
						<Button
							mode="outline"
							size="l"  before={<Icon28LockOpenOutline  />} onClick={()=>props.loginWEB3(props.web3Modal)}>Connect</Button>

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
					props.claimUser ?
						<div>
							<Title level="2" weight="heavy" style={{
								marginBottom: 0,
								textAlign: 'center'
							}}>You have already received your coins</Title>
							<Div>
								<Button size={"l"} stretched before={<Icon28LinkCircleOutline/>} target="_blank"
										href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xeE658f96F8D45085a9eC6Cb9c917d4875EF28987">Buy CUM</Button>
							</Div>
						</div>
						:
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
						<div style={{textAlign: "center"}}>
							<small style={{opacity: '.7'}}>Left until accrual</small>

							<Title level="3" weight="heavy" style={{
								marginBottom: 0,
								textAlign: 'center'
							}}>{moment(1625954786*1000).fromNow()  }</Title>
						</div>
						<br />

						<Button size={"l"} stretched before={<Icon28LockOpenOutline/>}
								disabled={false} onClick={props.getTest}>Pay fee</Button>
					</div>
					:
					endairdrop ?
						<div>
							<Title level="2" weight="heavy" style={{
								marginBottom: 0,
								textAlign: 'center'
							}}>Airdrop is over</Title>
							<Div>
								<Button size={"l"} stretched before={<Icon28LinkCircleOutline/>} target="_blank"
										href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xeE658f96F8D45085a9eC6Cb9c917d4875EF28987">Buy CUM</Button>
							</Div>
						</div>
						:

					<div>
						<Title level="2" weight="heavy" style={{
							marginBottom: 0,
							textAlign: 'center'
						}}>To get an airdrop of 10 000 CUM you need to follow these steps:</Title>


						<p style={{
							textAlign: 'center'
						}}>Log in and subscribe to our social networks</p>


						<CardGrid size="l">
							<Card>
								<Div style={{textAlign: 'center'}}>
									<Title level="2" weight="heavy" style={{
										marginBottom: 0,
										textAlign: 'center',
										display: "flex", justifyContent: "center", alignItems: "center"
									}}>Step 1 {props.userTG ? <Icon28CheckCircleFill style={{marginLeft: 12}} /> : <Icon28ErrorCircleOutline fill={"#ffa000"} style={{marginLeft: 12}} />}</Title>
									<br/>



									<div className="bot2" style={{marginLeft: 12}}>
										<TelegramLoginButton dataOnauth={(res) => {
											props.setuserTG(res)
										}} botName="cum_coin_airdrop_bot"/>
									</div>


								</Div>
							</Card>

							<Card>
								<Div style={{textAlign: 'center'}}>
									<Title level="2" weight="heavy" style={{
										marginBottom: 0,
										textAlign: 'center',
										display: "flex", justifyContent: "center", alignItems: "center"
									}}>Step 2 {props.twBtn2 ?<Icon28CheckCircleFill  style={{marginLeft: 12}} /> : <Icon28ErrorCircleOutline fill={"#ffa000"} style={{marginLeft: 12}} />}</Title>
									<br/>

									<Button size={"l"} before={<Icon24Send/>} mode="commerce" target="_blank" style={{marginLeft: 12}}
												href="https://t.me/cumcoinlive" onClick={() => {setTimeout(()=>props.settwBtn2(true),1000)}}>Telegram subscribe</Button>

								</Div>
							</Card>

							<Card>
								<Div style={{textAlign: 'center'}}>
									<Title level="2" weight="heavy" style={{
										marginBottom: 0,
										textAlign: 'center',
										display: "flex", justifyContent: "center", alignItems: "center"
									}}>Step 3 {props.twBtn ?<Icon28CheckCircleFill  style={{marginLeft: 12}} /> : <Icon28ErrorCircleOutline fill={"#ffa000"} style={{marginLeft: 12}} />}</Title>
									<br/>

									<Button size={"l"} before={<Icon24LogoTwitter/>} mode="commerce" target="_blank" style={{marginLeft: 12}}
											href="https://twitter.com/CUMCoinTeam" onClick={() => {setTimeout(()=>props.settwBtn(true),1000)}}>Twitter
										subscribe</Button>

								</Div>
							</Card>


						</CardGrid>


						<div style={{textAlign: "center"}}>

							<Div style={{display: "flex", justifyContent: "center"}}>
								<Reaptcha sitekey="6LdNUVUbAAAAAB0IwXlpMFXrwMCsslJoqUR12jW7" onVerify={props.onChangeCaptcha} theme='dark' />
							</Div>

							{props.ConnectedWEB3 ?

								<Button size={"l"} stretched before={<Icon28GiftOutline/>}
										disabled={!(props.userTG && props.twBtn && props.recaptcha && props.twBtn2)} onClick={props.getCUM}>Get 100
									CUM</Button>
								:
								<Button size={"l"} stretched before={<Icon28LockOpenOutline/>}
										onClick={props.loginWEB3}>Unlock Wallet</Button>
							}
						</div>

					</div>
					:
					<div>
						<Title level="2" weight="heavy" style={{
							marginBottom: 0,
							textAlign: 'center'
						}}>To get an airdrop of 10 000 CUM you need to follow these steps:</Title>


						<p style={{
							textAlign: 'center'
						}}>Log in and subscribe to our social networks</p>


						<CardGrid size="l">
							<Card>
								<Div style={{textAlign: 'center'}}>
									<Title level="2" weight="heavy" style={{
										marginBottom: 0,
										textAlign: 'center',
										display: "flex", justifyContent: "center", alignItems: "center"
									}}>Step 1 {props.userTG ? <Icon28CheckCircleFill style={{marginLeft: 12}} /> : <Icon28ErrorCircleOutline fill={"#ffa000"} style={{marginLeft: 12}} />}</Title>
									<br/>



									<div className="bot2" style={{marginLeft: 12}}>
										<TelegramLoginButton dataOnauth={(res) => {
											props.setuserTG(res)
										}} botName="cum_coin_airdrop_bot"/>
									</div>


								</Div>
							</Card>

							<Card>
								<Div style={{textAlign: 'center'}}>
									<Title level="2" weight="heavy" style={{
										marginBottom: 0,
										textAlign: 'center',
										display: "flex", justifyContent: "center", alignItems: "center"
									}}>Step 2 {props.twBtn2 ?<Icon28CheckCircleFill  style={{marginLeft: 12}} /> : <Icon28ErrorCircleOutline fill={"#ffa000"} style={{marginLeft: 12}} />}</Title>
									<br/>

									<Button size={"l"} before={<Icon24Send/>} mode="commerce" target="_blank" style={{marginLeft: 12}}
											href="https://t.me/cumcoinlive" onClick={() => {setTimeout(()=>props.settwBtn2(true),1000)}}>Telegram subscribe</Button>

								</Div>
							</Card>

							<Card>
								<Div style={{textAlign: 'center'}}>
									<Title level="2" weight="heavy" style={{
										marginBottom: 0,
										textAlign: 'center',
										display: "flex", justifyContent: "center", alignItems: "center"
									}}>Step 3 {props.twBtn ?<Icon28CheckCircleFill  style={{marginLeft: 12}} /> : <Icon28ErrorCircleOutline fill={"#ffa000"} style={{marginLeft: 12}} />}</Title>
									<br/>

									<Button size={"l"} before={<Icon24LogoTwitter/>} mode="commerce" target="_blank" style={{marginLeft: 12}}
											href="https://twitter.com/CUMCoinTeam" onClick={() => {setTimeout(()=>props.settwBtn(true),1000)}}>Twitter
										subscribe</Button>

								</Div>
							</Card>


						</CardGrid>


						<div style={{textAlign: "center"}}>

							<Div style={{display: "flex", justifyContent: "center"}}>
								<Reaptcha sitekey="6LdNUVUbAAAAAB0IwXlpMFXrwMCsslJoqUR12jW7" onVerify={props.onChangeCaptcha} theme='dark' />
							</Div>

								<Button size={"l"} stretched before={<Icon28LockOpenOutline/>}
										onClick={()=>props.loginWEB3(props.web3Modal)}>Unlock Wallet</Button>

						</div>

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
			}}>Invite people to airdrop with your referral link and get 15 000 CUM for peer referral to app balance</p>

				<br />
				<Input type="text" value={"https://app.cumcointeam.finance#"+ (props.userInfo ? props.userInfo.id : 0)} align="center" />
			<br />
				{props.userInfo ?
					<CopyToClipboard
						text={"https://app.cumcointeam.finance#" + (props.userInfo ? props.userInfo.id : 0)}
						onCopy={props.onCopy}>
						<Button
							mode="outline"
							size="l" stretched before={<Icon28CopyOutline/>}>{props.copyText} Link</Button>
					</CopyToClipboard>
					:
					<Button
						mode="outline"
						size="l" stretched before={<Icon28LockOpenOutline/>} onClick={()=>props.loginWEB3(props.web3Modal)}>Unlock Wallet</Button>
				}
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
									{props.userInfo ? props.userInfo.my_refs_count*15 : 0}k CUM
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
