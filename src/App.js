import React, { useState, useEffect } from 'react';

import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";


import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Ref from './panels/Ref';
import Top from './panels/Top';

import Error from './panels/Error';

import Offline from './panels/Offline';
import Mobile from './panels/Mobile';

import './panels/Persik.css';

import logo from './img/PNG2.png';
import logo2 from './img/logo.png';


import API from './api';




import axios from 'axios';
import {
	Button,
	ModalPage,
	ModalPageHeader,
	ModalRoot,
	Div,
	View,
	ScreenSpinner,
	withAdaptivity,
	VKCOM,
	SplitLayout,
	PanelHeader,
	SplitCol,
	Panel,
	Group,
	Cell,
	Epic,
	Tabbar,
	TabbarItem,
	usePlatform,
	CardGrid,
	Card,
	ConfigProvider,
	AdaptivityProvider,
	AppRoot,
	WebviewType,
	Title,
	Separator,
	Platform,
	PanelHeaderButton, Snackbar, Link,  Avatar
} from "@vkontakte/vkui";
import {
	Icon24CheckCircleOutline,
	Icon24Dismiss,
	Icon28CopyOutline,
	Icon28LinkCircleOutline,
	Icon28SyncOutline,
	Icon28Users3Outline,
	Icon28WalletOutline,
} from "@vkontakte/icons";

import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

import * as moment from 'moment';

const sheme = function () {
	document.querySelector('body').setAttribute("scheme","space_gray");
	let frame = document.querySelector('body');
	frame.setAttribute("scheme","space_gray");
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// dark mode
		// document.querySelector('body').setAttribute("scheme","space_gray");
		// let frame = document.querySelector('body');
		// frame.setAttribute("scheme","space_gray");

		// document.querySelector('link[rel="manifest"]').setAttribute("href","/webmanifest2.json");
		// document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content","#000");
		// document.querySelector('meta[name="theme-color"]').setAttribute("content","#000");
		// document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content","black");
	}
	// document.querySelector('link[rel="manifest"]').setAttribute("href","/webmanifest2.json");
	// document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content","#000");
	// document.querySelector('meta[name="theme-color"]').setAttribute("content","#000");
	// document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content","black");
	document.querySelector('link[rel="icon"]').setAttribute("href",logo2);
	document.querySelector('link[rel="apple-touch-icon"]').setAttribute("href",logo2);

};



const App = withAdaptivity(() => {
	// Стейт запуска
	const platform = usePlatform();
	const isDesktop = window.innerWidth >= 1000;
	const hasHeader = platform !== VKCOM;

	// Стейт приложения
	const [activeStory, setActiveStory] = useState('ref');
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [activeModal,setActiveModal] = useState(null);
	const [snackbar,setSnackbar] = useState(null);

	const [online,setOnline] = useState(true);

	// Стейт ошибок
	const [error,setError] = useState(null);
	const [error2,setError2] = useState(null);

	//web3
	const [ConnectedWEB3, setConnectedWEB3] = useState(null);

	const [SelectedWeb3Coin, setSelectedWeb3Coin] = useState(null);
	const [CumWeb3Coin, setCumWeb3Coin] = useState(null);

	const [web3Modal, setWeb3Modal] = useState(null);

	const [aircon, setaircon] = useState(null);
	const [claimUser, setclaimUser] = useState(null);

	//web3 user
	const [provider, setprovider] = useState(null);
	const [connected, setconnected] = useState(false);
	const [address, setaddress] = useState(null);
	const [chainId, setchainId] = useState(null);
	const [networkId, setnetworkId] = useState(null);


	//info server user
	const [userInfo, setuserInfo] = useState(null);

	//tg user
	const [userTG, setuserTG] = useState(null);

	const [copyText, setcopyText] = useState("Copy");

	const [priceCUM, setpriceCUM] = useState(null);

	const [twBtn, settwBtn] = useState(false);

	//google cap
	const [recaptcha, setrecaptcha] = useState(false);

	const [Coins, setCoins] = useState([
		{
			name: 'BUSD',
			label: 'BUSD Token',
			contract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
			decimals: 18,
			balance: 0,
			ico: "https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png",
			price: 1.00
			// abi: 1
		},
		{
			name: 'BNB',
			label: 'Smart Chain',
			contract: '0xb8c77482e45f1f44de1745f52c74426c631bdd52', // WARN: in ERC-20 network
			decimals: 18,
			balance: 0,
			ico: "https://bscscan.com/token/images/binance_32.png",
			price: 0.00
		},
		{
			name: 'CUM',
			label: 'Canada USA Mexico',
			contract: '0xee658f96f8d45085a9ec6cb9c917d4875ef28987',
			decimals: 8,
			balance: 0,
			ico: logo2,
			price: 0.00
		},
	])

	//hash user
	const [hash, sethash] = useState("")



	useEffect(() => {

		sheme();

		setPopout(null);

		window.addEventListener('online', () =>setOnline(true));
		window.addEventListener('offline', () =>setOnline(false));

		// connectWeb3();


		let hash = window.location.hash ? window.location.hash.substr(1) : '';
		sethash(hash)


		const providerOptions = {

			walletconnect: {
				package: WalletConnectProvider,
				options: {
					rpc: {
						56: 'https://bsc-dataseed.binance.org/',
					},
					network: 'binance',
					chainId: 56,
					infuraId: "0db04b8aad4e437d824f8acb08cd3902",
					bridge: "https://polygon.bridge.walletconnect.org"
				},
			},
		}

		const web = new Web3Modal({
			network: "mainnet",
			cacheProvider: true,
			// disableInjectedProvider: true,
			providerOptions: providerOptions,
			theme: "dark"
		})
		setWeb3Modal(web)

		if (web.cachedProvider) {
			let data = loginWEB3 (web,hash);
			console.log(data);
		}



	}, []);


	// async function connectWeb3() {
	// 	console.log(1111)
	// 	const providerOptions = {
	// 		/* See Provider Options Section */
	// 	};
	//
	// 	const web3Modal = new Web3Modal({
	// 		network: "mainnet", // optional
	// 		cacheProvider: true, // optional
	// 		providerOptions // required
	// 	});
	//
	// 	const provider = await web3Modal.connect();
	// 	const web3 = new Web3(provider);
	//
	// 	setConnectedWEB3(web3);
	//
	// 	setCumWeb3Coin(                                     // CUM Coin contract address
	// 		new web3.eth.Contract(PancakePair.abi, '0xee658f96f8d45085a9ec6cb9c917d4875ef28987')
	// 	)
	// }
	//
	// function initContracts(key) {
	//
	// 	const selectedCoin = Coins[key.target.value]
	// 	selectedCoin.web3 = new ConnectedWEB3.eth.Contract(PancakePair.abi, selectedCoin.contract)
	// 	setSelectedWeb3Coin(selectedCoin)
	// 	console.log(selectedCoin)
	// }

	async function subscribeProvider (provider) {
		if (!provider.on) {
			return false;
		}
		provider.on("close", () => {
			resetApp ();

		});
		provider.on("accountsChanged", async (accounts) => {
			// await this.setState({ address: accounts[0] });
			setaddress(accounts[0]);
			// await getAccountAssets();
		});
		provider.on("chainChanged", async (chainId) => {

			const networkId = await ConnectedWEB3.eth.net.getId();
			setnetworkId(networkId);
			setchainId(chainId);
			// await this.setState({ chainId, networkId });
			// await getAccountAssets();
		});

		provider.on("networkChanged", async (networkId) => {

			const chainId = await ConnectedWEB3.eth.chainId();
			setchainId(chainId);
			setnetworkId(networkId);
			// await this.setState({ chainId, networkId });
			// await getAccountAssets();
		});
		provider.on("connect", async (info) => {
			console.log('connect:',info);
		});

		// Subscribe to provider disconnection
		provider.on("disconnect", async (error) => {
			console.log('disconnect:',error);
		});


	}

	async function loginWEB3 (web3Modal,h = hash) {


		const provider = await web3Modal.connect();

		await subscribeProvider(provider);

		const web3 = initWeb3(provider);

		const accounts = await web3.eth.getAccounts();

		const address = accounts[0];

		const networkId = await web3.eth.net.getId();

		const chainId = await web3.eth.chainId();


		let balance = await web3.eth.getBalance(address);
		balance = (balance / Math.pow(10,18)).toFixed(4);

		let coins = Coins;
		for (let i=0;i<coins.length;i++) {
			if (coins[i].name === "BNB") {
				coins[i].balance = balance;

				let dP = await axios("https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c")
				if (dP.data.data) {
					coins[i].price = dP.data.data.price
					console.log(dP)
				}

			} else {
				coins[i].balance = await balanceToken(web3,coins[i].contract,address);
				if (coins[i].name === "CUM") {
					coins[i].price = await getPrice(web3);
				}
			}
		}



		console.log("USER:",{
			provider: provider,
			web3: web3,
			accounts: accounts,
			address: address,
			networkId: networkId,
			chainId: chainId,
			coins: coins
		})


		setprovider(provider);
		setconnected(true);
		setaddress(address);
		setchainId(chainId);
		setnetworkId(networkId);
		setCoins(coins);
		go("top")
		return await usersGet(address,h,web3);
		// await getAccountAssets(address,chainId);


	}

	function initWeb3(provider) {
		const web3 = new Web3(provider);

		web3.eth.extend({
			methods: [
				{
					name: "chainId",
					call: "eth_chainId",
					outputFormatter: web3.utils.hexToNumber
				}
			]
		});
		setConnectedWEB3(web3);

		return web3;
	}

	async function resetApp () {

		if (ConnectedWEB3 && ConnectedWEB3.currentProvider && ConnectedWEB3.currentProvider.close) {
			await ConnectedWEB3.currentProvider.close();
		}
		if (web3Modal) {
			await web3Modal.clearCachedProvider();
		}

		setprovider(null);
		setconnected(false);
		setaddress(null);
		setchainId(null);
		setnetworkId(null);
		go("ref");
	}

	async function balanceToken(web3,contract_address,wallet_address,fix = 4) {
		let tokenAddress = contract_address;
		let walletAddress = wallet_address;

		let minABI = [
			{
				"constant":true,
				"inputs":[{"name":"account","type":"address"}],
				"name":"balanceOf",
				"outputs":[{"name":"balance","type":"uint256"}],
				"type":"function"
			},
			{
				"constant":true,
				"inputs":[],
				"name":"decimals",
				"outputs":[{"name":"","type":"uint8"}],
				"type":"function"
			}
		];


		if (web3) {
			let contract = new web3.eth.Contract(minABI, tokenAddress);

			let bal = await contract.methods.balanceOf(walletAddress).call();
			const decimals = await contract.methods.decimals().call();

			return (bal / Math.pow(10, decimals)).toFixed(fix);
		} else {
			return false;
		}
	}

	async function getPrice(web3) {

		let busdP = await balanceToken(web3,"0xe9e7cea3dedca5984780bafc599bd69add087d56","0xf84948Cf77fd0A912e70583becbf64b6161E2A38",18);
		let cumP = await balanceToken(web3,"0xee658f96f8d45085a9ec6cb9c917d4875ef28987","0xf84948Cf77fd0A912e70583becbf64b6161E2A38",8);
		let Price = (busdP / cumP).toFixed(8)
		console.log("busdP:",busdP);
		console.log("cumP:",cumP);

		console.log("Price:",Price);

		setpriceCUM(Price);
		return Price;

	}

	async function getTest () {

		aircon.methods.claim(userInfo.mr_index,address,userInfo.mr_amount,userInfo.mr_proof).send({from: address});

		// setSnackbar(<Snackbar
		// 	onClose={() => setSnackbar(null)}
		// 	before={<Avatar size={24} style={{ background: 'var(--commerce)' }}><Icon24CheckCircleOutline fill="#fff" width={14} height={14} /></Avatar>}
		//
		// >Confirm the operation in your wallet</Snackbar>);
		setActiveModal("confirm");
	}

	async function isClaimed (user,web3) {
		let minABI = [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "token_",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "merkleRoot_",
						"type": "bytes32"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "Claimed",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "bytes32[]",
						"name": "merkleProof",
						"type": "bytes32[]"
					}
				],
				"name": "claim",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "isClaimed",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "merkleRoot",
				"outputs": [
					{
						"internalType": "bytes32",
						"name": "",
						"type": "bytes32"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "token",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		];
		let contract = new web3.eth.Contract(minABI, "0x5f5bEA2479A9B1ab86Ae3150E19B1BD91c2f32E8");
		setaircon(contract);

		let Claim = await contract.methods.isClaimed(user.mr_index).call();
		setclaimUser(Claim);
	}


	async function usersGet(wallet,hash = '',web3 = null) {

		let sendData = {
			wallet: wallet
		}
		if (hash !== '') {
			sendData.ref = Number(hash);
		}
		const data = await new API().Post("api.wallet.get_info",sendData);
		if (Object.keys(data).includes('error')) {

			setError(data?.error_code);
			setError2(data?.error2);
			go("error")

		} else {
			setuserInfo(data?.info);
			if (web3) {
				isClaimed(data?.info,web3);
			}

		}
		return data
	}

	async function getCUM() {

		let sendData = {
			wallet: address,
			telegram_id: userTG.id,
			g_recaptcha_response: recaptcha
		}
		const data = await new API().Post("api.wallet.check",sendData);

		if (Object.keys(data).includes('error')) {
			let textError = 'Airdrop error';
			switch (data?.error_code) {
				case 1006:
					textError = "Telegram account has already been used";
					break;
				case 1007:
					textError = "You are not subscribed to social networks";
					break;
				case 1008:
					textError = "Captcha error";
					break;
				case 1010:
					textError = "Airdrop done";
					break;
				default:
					setError(data?.error_code);
					setError2(data?.error2);
					go("error");
					break;
			}

			setSnackbar(<Snackbar
				onClose={() => setSnackbar(null)}
				before={<Avatar size={24} style={{ background: 'var(--destructive)' }}><Icon24Dismiss fill="#fff" width={14} height={14} /></Avatar>}

			>{textError}</Snackbar>);
		} else {
			let data = await usersGet(address);
			console.log(data);
			setSnackbar(<Snackbar
				onClose={() => setSnackbar(null)}
				before={<Avatar size={24} style={{ background: 'var(--commerce)' }}><Icon24CheckCircleOutline fill="#fff" width={14} height={14} /></Avatar>}

			>Successful AirDrop</Snackbar>);

		}
	}



	function onChangeCaptcha(value) {
		setrecaptcha(value);
	}

	function onCopy () {
		setcopyText("Copied");
		setTimeout(()=>{
			setcopyText("Copy");
		},2000)
	}

	const go = (e) => {
		if (e.currentTarget) {
			setActiveStory(e.currentTarget.dataset.to);
			// setActivePanel(e.currentTarget.dataset.to);
		} else {
			setActiveStory(e);
			// setActivePanel(e);

		}

	};

	const onStoryChange = (e) => {
		setActiveStory(e.currentTarget.dataset.story);
	};




	const modal = (
		<ModalRoot activeModal={activeModal}>

			<ModalPage
				settlingHeight={80}
				onClose={()=>setActiveModal(null)}
				id="wallet"
				header={
					<ModalPageHeader right={
						isDesktop ?
							null :
						<PanelHeaderButton onClick={()=>setActiveModal(null)}><Icon24Dismiss/></PanelHeaderButton>

					}>
						Your wallet
					</ModalPageHeader>}
			>
				<Div>

					<Title level="3" weight="heavy" style={{
						marginBottom: 0,
						textAlign: 'center',
						fontSize: isDesktop ? ".9em" : ".7em"
					}}>{address}</Title>
					<br />
					<div style={{display: "flex"}}>
						<Button
							mode="outline"
							style={{marginRight: 12}}
							size="l" stretched before={<Icon28LinkCircleOutline  />} target="_blank" href={"https://bscscan.com/address/"+address}>View on BscScan</Button>

						<CopyToClipboard text={address}
										 onCopy={onCopy}>
							<Button
								mode="outline"
								size="l" stretched before={<Icon28CopyOutline  />}>{copyText} Address</Button>
						</CopyToClipboard>

					</div>
					<br />

				</Div>
			</ModalPage>

			<ModalPage
				settlingHeight={80}
				onClose={()=>setActiveModal(null)}
				id="info"
				header={
					<ModalPageHeader right={
						isDesktop ?
							null :
							<PanelHeaderButton onClick={()=>setActiveModal(null)}><Icon24Dismiss/></PanelHeaderButton>

					}>
						Manual connect
					</ModalPageHeader>}
			>
				<Div>

					<p>1. Install Trust Wallet and create a wallet <br />
						2. Select WalletConnect authorization on our website<br />
						3. Go to the WalletConnect section in your Trust Wallet and scan the QR code for authorization</p>
					<br />

					<Button
						mode="outline"
						style={{marginRight: 12}}
						size="l" stretched before={<Icon28LinkCircleOutline  />} target="_blank" href={"https://trustwallet.com/download-page"}>Trust Wallet</Button>



				</Div>
			</ModalPage>

			<ModalPage
				settlingHeight={80}
				onClose={()=>setActiveModal(null)}
				id="confirm"
				header={
					<ModalPageHeader right={
						isDesktop ?
							null :
							<PanelHeaderButton onClick={()=>setActiveModal(null)}><Icon24Dismiss/></PanelHeaderButton>

					}>
						Confirm
					</ModalPageHeader>}
			>
				<Div>
					<Title level="3" weight="" style={{
						marginBottom: 0,
						textAlign: 'center'
					}}>Confirm the operation in your wallet.</Title>
					<p style={{marginTop: 0}}><br />
						Log in to your wallet and confirm the operation of receiving the airdrop by paying the fee

					</p>


				</Div>
			</ModalPage>




		</ModalRoot>
	);

	return (
		<ConfigProvider webviewType={WebviewType.INTERNAL} platform={Platform.IOS}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout
						popout={popout}
						modal={modal}
						header={hasHeader && <PanelHeader id="nottt" separator={false} >

						</PanelHeader>}
						style={{ justifyContent: "center" }}
					>
						{isDesktop && activeStory !== "ref" && (
							<SplitCol fixed width="350px" maxWidth="350px" >
								<Panel id="menu1">
									{/*<p style={{textAlign: "center",margin: 0}}>*/}
									{/*	<img src={logo} width="120px" />*/}
									{/*</p>*/}

									{hasHeader && <PanelHeader id="logoh"><img src={logo} width="100px" alt="" /></PanelHeader>}

									<Group >

											<div>
												<CardGrid size="l">
													<Card>
														<Div style={{textAlign: 'center'}}>
															<small style={{opacity: '.7'}}>AirDrop balance</small>
															<Title level="1" weight="heavy" style={{
																marginBottom: 0,
																textAlign: 'center'
															}}>{userInfo ? (userInfo.airdrop_balance / Math.pow(10, 8)).toFixed(0)  : 0} CUM</Title>

															<small style={{opacity: '.7'}}>Left until accrual</small>

															<Title level="3" weight="heavy" style={{
																marginBottom: 0,
																textAlign: 'center'
															}}>{moment(1625954786*1000).fromNow()  }</Title>


														</Div>

													</Card>
													{/*<Card>*/}
													{/*	<Div style={{textAlign: 'center'}}>*/}
													{/*		<small style={{opacity: '.7'}}>Your BEP20 address</small>*/}
													{/*		<br />*/}
													{/*		<Title level="1" weight="heavy" style={{*/}
													{/*			marginBottom: 0,*/}
													{/*			textAlign: 'center'*/}
													{/*		}}>0xa7...F92F</Title>*/}

													{/*	</Div>*/}

													{/*</Card>*/}


													<Card>
														<Cell
															description="BEP20"
															onClick={()=>setActiveModal("wallet")}
															after={address ? address.substr(0, 4)+"..."+address.substr(address.length-4, address.length-1) : ""}
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
															target="_blank"
															href="https://www.dextools.io/app/pancakeswap/pair-explorer/0xf84948cf77fd0a912e70583becbf64b6161e2a38"
															after={priceCUM > 0 ? "$" + priceCUM : "$0.00000000"}
															before={
																<Avatar src={logo2} size={28} />
															}
														>
															Price
														</Cell>
													</Card>
													<Card>
														{Coins.length > 0 ? Coins.map((coin,key)=> (
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





											</div>

										<Separator style={{margin: 12}} wide/>

										<div style={{padding: 8}}>
										<Cell
											disabled={activeStory === 'home'}
											style={activeStory === 'home' ? {
												backgroundColor: "var(--button_secondary_background)",
												borderRadius: 8
											} : {}}

											data-story="home"
											onClick={onStoryChange}
											before={<Icon28SyncOutline  />}
											description="Exchange"
										>
											SWAP
										</Cell>
										<Cell
											disabled={activeStory === 'top'}
											style={activeStory === 'top' ? {
												backgroundColor: "var(--button_secondary_background)",
												borderRadius: 8
											} : {}}
											data-story="top"
											onClick={onStoryChange}
											before={<Icon28Users3Outline  />}
											description="Free coin"
										>
											AirDrop
										</Cell>


										</div>



									</Group>

									{/*{userData ? userData.user_name === '' ?*/}
									{/*	<Group>*/}
									{/*		<Div style={{textAlign: 'center'}}>*/}
									{/*			<h4 style={{margin: 0, textAlign: 'center'}}>Предупреждение!</h4>*/}
									{/*			<small> <Link target="_blank" href={"https://vk.me/cum.team?ref=" + (userData ? userData.user_id : "")}>Авторизуйтесь</Link> что бы не потерять ваш аккаунт.</small>*/}
									{/*		</Div>*/}
									{/*	</Group>*/}
									{/*	:*/}
									{/*	null*/}
									{/*	:*/}
									{/*	null*/}
									{/*}*/}




									<div style={{textAlign: 'center'}}>
										<small>
											2021 © <Link target="_blank" href="https://cumcointeam.finance">CUM coin</Link>
										</small>
									</div>


								</Panel>
							</SplitCol>
						)}


						<SplitCol
							animate={!isDesktop}
							spaced={isDesktop}
							width={isDesktop ? '500px' : '100%'}
							maxWidth={isDesktop ? '500px' : '100%'}
							// style={{marginTop: isDesktop ? 20 : 0 }}
						>
							<Epic activeStory={online ? activeStory : "offline"} tabbar={!isDesktop && activeStory !== "ref" &&
							<Tabbar>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'mobile'}
									data-story="mobile"
									text="Wallet"
								><Icon28WalletOutline /></TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'home'}
									data-story="home"
									text="SWAP"
								><Icon28SyncOutline /></TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'top'}
									data-story="top"
									text="AirDrop"
								><Icon28Users3Outline /></TabbarItem>

							</Tabbar>
							}>

								<View id="top" activePanel="top" >
									<Top
										id='top'
										go={go}

										isDesktop={isDesktop}

										loginWEB3={loginWEB3}
										ConnectedWEB3={ConnectedWEB3}
										resetApp={resetApp}

										userInfo={userInfo}

										userTG={userTG}
										setuserTG={setuserTG}

										copyText={copyText}

										onCopy={onCopy}

										twBtn={twBtn}
										settwBtn={settwBtn}

										getCUM={getCUM}

										onChangeCaptcha={onChangeCaptcha}

										recaptcha={recaptcha}

										getTest={getTest}
										claimUser={claimUser}

									/>
								</View>
								<View id="home" activePanel="home">
									<Home
										id='home'
										go={go}

										isDesktop={isDesktop}

										onStoryChange={onStoryChange}
										resetApp={resetApp}

									/>

								</View>

								<View id="ref" activePanel="ref">
									<Ref
										id='ref'
										go={go}

										isDesktop={isDesktop}

										loginWEB3={loginWEB3}

										resetApp={resetApp}

										web3Modal={web3Modal}
										setActiveModal={setActiveModal}



									/>

								</View>

								<View id="mobile" activePanel="ref">
									<Mobile
										id='ref'
										go={go}

										isDesktop={isDesktop}

										loginWEB3={loginWEB3}

										resetApp={resetApp}

										web3Modal={web3Modal}

										Coins={Coins}
										address={address}

										userInfo={userInfo}

										setActiveModal={setActiveModal}
										priceCUM={priceCUM}




									/>

								</View>




								<View id="error" activePanel="error">
									<Error
										id='error'
										go={go}
										error={error}
										error2={error2}

										resetApp={resetApp}
										isDesktop={isDesktop}
									/>
								</View>

								<View id="offline" activePanel="home" >
									<Offline id="home" />
								</View>


							</Epic>

						</SplitCol>

						{snackbar}
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}, {
	viewWidth: true
});

export default App;

