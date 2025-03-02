import TencentMeeting from "./assets/meeting/TencentMeeting";
import Feishu from "./assets/meeting/Feishu";
import Dingding from "./assets/meeting/Dingding";
import GoogleMeet from "./assets/meeting/GoogleMeet";
import SlackLogo from "./assets/meeting/SlackLogo";
import RuliuLogo from "./assets/meeting/RuliuLogo";
import MicrosoftTeams from "./assets/meeting/MicrosoftTeams";
import ZoomLogo from "./assets/meeting/ZoomLogo";

export default function MeetingApp() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-wrap justify-center space-x-10">
        <TencentMeeting />
        <Feishu />
        <Dingding />
      </div>
      <div className="flex flex-wrap justify-center space-x-10">
        <ZoomLogo />
        <GoogleMeet />
      </div>
      <div className="flex flex-wrap justify-center space-x-10">
        <SlackLogo />
        <RuliuLogo />
        <MicrosoftTeams />
      </div>
      <div className="text-xl font-stock text-center text-gray-500">支持所有远程笔试/面试平台</div>
    </div>
  );
}
