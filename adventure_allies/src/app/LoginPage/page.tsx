import bg from "../images/loginPage.jpg"
import discordIcon from "../images/discordIcon.png"


export default function LoginPage() {
	return (
		<div className="min-h-screen bg-cover bg-center"
			style={{
				backgroundImage: `url(${bg.src})`,
			}}>
			<div className="gap-[5%]  justify-center flex flex-col items-center absolute inset-0 bg-gray-700 bg-opacity-60">
				<div className=" relative ">
					<div className="text-center font-english-font text-white font-bold text-7xl leading-normal tracking-wider">
						Adventure Allies
					</div>
					<div className="-mt-4 text-opacity-80 text-center font-chinese-font text-white font-medium text-base leading-tight tracking-wide">
						距離不再是問題，讓遠在他鄉的親友們輕鬆團聚
					</div>
				</div>
				<div className="p-1 w-[27.5vh] h-[8vh] ">
					<div className=" gap-[8%] shadow-xl p-4 items-center flex flex-row rounded-full bg-opacity-85 w-full h-full"
						style={{
							background: "#5869EBD9"
						}}>
						<div className="basis-1/4 bg-contain bg-center aspect-square"
							style={{
								backgroundImage: `url(${discordIcon.src})`,
							}}>
						</div>
						<div className="basis-3/4 text-white text-center font-medium text-base leading-tight tracking-wide">
							<span className="font-chinese-font">透過</span>
							<span className="font-english-font">Discord</span>
							<span className="font-chinese-font">登入</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}