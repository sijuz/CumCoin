import React from 'react';
import PropTypes from 'prop-types';




import './Persik.css';
import {
	Banner,
	Card,
	CardGrid, CardScroll, CellButton, CustomSelectOption, Epic, Footer, Gallery, Input, Link,
	PanelHeaderButton, PanelHeaderContent,
	Progress, RichCell, Select,
	Separator, SimpleCell, SliderSwitch,
	Spinner,
	Tabs,
	TabsItem,
	Title,
	Cell, FormItem, FormLayoutGroup, Placeholder, Panel, PanelHeader, Button, Group, Div, Avatar
} from "@vkontakte/vkui";
import {
	Icon16Market,
	Icon16Users, Icon20Dropdown, Icon24ArrowDownOutline, Icon24ChevronDown,
	Icon28AddCircleOutline, Icon28ArrowDownOutline, Icon28ArrowUpCircleOutline,
	Icon28ArticleOutline,
	Icon28BrainOutline,
	Icon28BriefcaseOutline, Icon28CheckCircleFill, Icon28ClockCircleFillGray, Icon28DoorArrowLeftOutline,
	Icon28EmployeeOutline,
	Icon28GiftOutline,
	Icon28LogoVk,
	Icon28MoneyCircleOutline,
	Icon28MoneyHistoryBackwardOutline,
	Icon28MoneyRequestOutline,
	Icon28MoneySendOutline,
	Icon28RefreshOutline, Icon28SyncOutline,
	Icon28UploadOutline,
	Icon28Users3Outline,
	Icon28ViewOutline,
	Icon56ArchiveOutline,
	Icon56DiamondOutline,
	Icon56FavoriteOutline,
	Icon56FireOutline,
	Icon56MailOutline,
	Icon56SchoolOutline,
	Icon56Stars3Outline
} from '@vkontakte/icons';
// import { Icon16ClockOutline } from '@vkontakte/icons';
import { Icon28LightbulbCircleFillYellow } from '@vkontakte/icons';
import { Icon28SnowflakeOutline } from '@vkontakte/icons';
import { Icon28LightbulbStarOutline } from '@vkontakte/icons';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

import { createChart } from 'lightweight-charts';


import logo from "../img/PNG2.png";


const dev = true;
const Home = props => (
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
		<Group>

			{dev ?
				<Div>

					<Title weight="heavy" level="1">Exchange</Title>
					<br />
					{/*<small>Comming soon...</small>*/}

					<div style={{textAlign: "center"}}>
					<iframe src="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xeE658f96F8D45085a9eC6Cb9c917d4875EF28987" frameBorder="0" width="400" style={{borderRadius: 20}}
							height="900" />
					</div>
				</Div>
				:

				<Div>


					<Div style={{paddingBottom: 32}}>
						<Title weight="heavy" level="1">Exchange</Title>
						<small>Trade tokens in an instant</small>
					</Div>

					<CardGrid size="l">
						<Card>
							<div style={{display: 'flex'}}>
								<FormItem top="From" style={{width: "65%"}}>
									<Input placeholder="0.0"/>
								</FormItem>

								<FormItem top="Balance: 135" style={{width: "33%"}}>
									<Select
										placeholder={<span
											style={{display: 'flex', justifyContent: "left", alignItems: "center"}}>
									<Avatar size={20}
											src={"https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"}/>
									<span style={{paddingLeft: 8}}>BUSD</span>
								</span>}
										options={[{
											name: "BUSD",
											ico: "https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png",
											id: 1
										}].map(user => ({label: user.name, value: user.id, avatar: user.ico}))}
										renderOption={({option, ...restProps}) => (
											<CustomSelectOption {...restProps}
																before={<Avatar size={24} src={option.avatar}/>}/>
										)}
									/>
								</FormItem>

							</div>
						</Card>
						<Div style={{
							display: 'flex',
							justifyContent: "center",
							alignItems: "center",
							marginBottom: "-8px",
							color: "var(--accent)",
							width: "100%"
						}}>
							<Icon24ChevronDown/>
						</Div>
						<Card>


							<div style={{display: 'flex'}}>
								<FormItem top="To" style={{width: "65%"}}>
									<Input placeholder="0.0"/>
								</FormItem>

								<FormItem top="Balance: 0" style={{width: "33%"}}>
									<Select
										placeholder={<span
											style={{display: 'flex', justifyContent: "left", alignItems: "center"}}>
									<Avatar size={20}
											src={"https://sun9-50.userapi.com/impg/IDuPsNNHLAPpxL4pq-EToS9MUx0MoKqkbfpT3g/-GvvycDh6ZU.jpg?size=47x47&quality=96&sign=3b50da4f0afe15377d2c81de70c98805&type=album"}/>
									<span style={{paddingLeft: 8}}>CUM</span>
								</span>}

										options={[].map(user => ({label: user.name, value: user.id, avatar: user.ico}))}
										renderOption={({option, ...restProps}) => (
											<CustomSelectOption {...restProps}
																before={<Avatar size={24} src={option.avatar}/>}/>
										)}
									/>
								</FormItem>

							</div>

						</Card>
					</CardGrid>
					<Div style={{display: 'flex', justifyContent: "space-between"}}>
						<small>Price</small>
						<small> 1.5 CUM per BUSD</small>
					</Div>
					<Div>
						<Button size={"l"} stretched before={<Icon28SyncOutline/>}>Exchange</Button>
					</Div>

				</Div>
			}



			{props.snackbar}
		</Group>


		{/*<Footer>Разработка <Link target="_blank" href="https://zer0.studio">Studio 0 </Link></Footer>*/}




	</Panel>
);

export default Home;
