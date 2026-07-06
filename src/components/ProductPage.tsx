/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import lingnanCover from '../assets/images/lingnan-cover.jpg';
import wtLogo from '../assets/images/wt-logo-cropped.png';

type Attraction = { name: string; desc: string; en: string };
type Day = {
  no: string;
  cityEn: string;
  cityCn: string;
  stops: string[];
  stopsEn: string[];
  hotel: string;
  hotelEn: string;
  body: string;
  bodyEn: string;
  short: string;
  shortEn: string;
  quote: string;
  attractions: Attraction[];
};

type ServiceItem = { no: string; title: string; en: string };

const overviewDays = [
  ['D1', '广州抵达', '接机接站、欢迎晚餐、珠江夜色轻体验', 'Arrival, welcome dinner and river lights'],
  ['D2', '广州 / 番禺', '陈家祠、南越王博物馆、番禺祖籍线索', 'Old Canton and Panyu roots'],
  ['D3', '佛山 / 顺德', '佛山祖庙、清晖园、顺德餐；可依祖籍线索定制', 'Temple, garden and Shunde cuisine'],
  ['D4', '江门 / 中山', '五邑华侨华人博物馆、历史街区、中山寻访', 'Wuyi heritage and Zhongshan roots'],
  ['D5', '台山', '台山侨乡轻访、侨商座谈交流会', 'Taishan hometown exchange'],
  ['D6', '台山 / 开平 / 深圳', '精选一处侨乡点，傍晚深圳轻游', 'A hometown visit, then Shenzhen Bay'],
  ['D7', '深圳', '健康体检、基础评估、酒店静养休息', 'Health check and quiet rest'],
  ['D8', '深圳', '中医康养体验、口腔护理、改革开放展览馆', 'Wellness and modern Shenzhen'],
  ['D9', '深圳 / 广州返程', '不安排游览，按航班从容送机', 'Calm airport transfer and departure'],
];

const itineraryDays: Day[] = [
  {
    no: '01', cityEn: 'GUANGZHOU', cityCn: '广州',
    stops: ['抵达广州', '接机 / 接站', '欢迎晚餐', '可选珠江夜色轻体验'],
    stopsEn: ['Arrive in Guangzhou', 'Airport / station transfer', 'Welcome dinner', 'Optional Pearl River night view'],
    hotel: '住：广州', hotelEn: 'Stay: Guangzhou',
    body: '抵达广州后，先把行李、时差和长途飞行的疲惫安顿好。傍晚以一席清雅广府味开场，若状态合适，再到江边或船上看广州夜色，把第一眼岭南留给珠江。',
    bodyEn: 'After arrival in Guangzhou, the first hours are kept for settling in after the long flight. The evening begins with refined Cantonese flavors, followed by an optional riverside or cruise view of Guangzhou at night.',
    short: '第一晚不赶路，只用一桌菜、一段江风，慢慢进入广东。',
    shortEn: 'The first evening enters Guangdong gently through dinner, river breeze and city lights.',
    quote: 'A soft arrival in Guangzhou, where the journey begins with rest, dinner, and river light.',
    attractions: [
      { name: '珠江夜色', desc: '广州最有代表性的城市夜景之一，适合作为抵达后的轻松体验，不消耗太多体力。', en: "Pearl River night view: a gentle first impression of Guangzhou's skyline." },
      { name: '广府欢迎晚餐', desc: '以清淡、精致、容易入口的粤菜打开行程，也让“家乡味”成为旅程第一段记忆。', en: 'Cantonese welcome dinner: a soft culinary opening to the journey.' },
    ],
  },
  {
    no: '02', cityEn: 'PANYU', cityCn: '广州 / 番禺',
    stops: ['陈家祠 / 南越王博物馆', '番禺老街', '宗祠外观 / 祖籍文化点', '广府家乡菜'],
    stopsEn: ['Chen Clan Ancestral Hall / Nanyue King Museum', 'Panyu old streets', 'Ancestral hall exterior / heritage site', 'Cantonese hometown cuisine'],
    hotel: '住：广州或番禺', hotelEn: 'Stay: Guangzhou or Panyu',
    body: '这一天从广州的历史层次走起：宗族建筑、南越遗址与番禺乡脉连在一起，先理解岭南从哪里来，再慢慢接近自己的祖籍线索。',
    bodyEn: "The day begins with Guangzhou's historical layers: clan architecture, Nanyue heritage and Panyu hometown roots, offering a clear understanding of Lingnan before moving closer to family clues.",
    short: '不是匆忙看景点，而是把“广州”和“我家”之间的关系看清楚。',
    shortEn: 'This is not rushed sightseeing; it is a way to see the link between Guangzhou and family memory.',
    quote: 'Old Canton opens toward Panyu, where family place names begin to feel close again.',
    attractions: [
      { name: '陈家祠', desc: '岭南宗族建筑与民间工艺的代表，木雕、砖雕、灰塑和祠堂格局共同呈现广东家族文化。', en: 'Chen Clan Ancestral Hall: a landmark of Lingnan clan architecture and craftsmanship.' },
      { name: '南越王博物馆', desc: '从两千多年前的南越国历史切入，呈现广州作为岭南中心城市的深厚时间感。', en: "Nanyue King Museum: a gateway to Guangzhou's ancient southern history." },
      { name: '番禺老街 / 宗祠外观', desc: '番禺是新西兰早期华侨重要祖籍线索之一，适合安排老街、村落与宗祠外观慢访。', en: 'Panyu old streets and ancestral halls: a meaningful hometown-root segment.' },
      { name: '广府家乡菜', desc: '用一餐饭讲清广府味道：清、鲜、细，也符合舒缓从容的饮食节奏。', en: 'Cantonese hometown cuisine: delicate, fresh and comfortably paced.' },
    ],
  },
  {
    no: '03', cityEn: 'FOSHAN · SHUNDE', cityCn: '佛山 / 顺德',
    stops: ['佛山祖庙', '顺德清晖园', '顺德餐', '祖籍线索定制'],
    stopsEn: ['Foshan Ancestral Temple', 'Qinghui Garden, Shunde', 'Shunde cuisine', 'Heritage customization'],
    hotel: '住：佛山 / 顺德 / 广州', hotelEn: 'Stay: Foshan / Shunde / Guangzhou',
    body: '佛山与顺德把岭南的精神气质和日常美学放在同一天：在佛山祖庙看信俗、武术与工艺，在清晖园看园林、水景与厅堂细节，再以一席顺德风味餐收束行程。',
    bodyEn: 'Foshan and Shunde bring together Lingnan spirit and everyday aesthetics: temple culture, martial tradition and craft in Foshan, garden refinement in Qinghui Garden, and the culinary elegance of Shunde.',
    short: '如祖籍线索与增城、东莞相关，可在出发前沟通后作个性化安排。',
    shortEn: 'Where family clues connect to Zengcheng or Dongguan, personalized arrangements can be discussed before departure.',
    quote: 'Temple culture, garden refinement and Shunde cuisine create a gentle Lingnan day.',
    attractions: [
      { name: '佛山祖庙', desc: '佛山城市文化地标，集中呈现岭南庙宇、武术、陶塑、木雕和民间信俗。', en: 'Foshan Ancestral Temple: a landmark of temple culture, martial tradition and Lingnan craft.' },
      { name: '顺德清晖园', desc: '广东四大名园之一，以小尺度园林、水景、窗棂和厅堂细节体现岭南生活美学。', en: "Qinghui Garden: one of Guangdong's classic gardens, known for delicate Lingnan aesthetics." },
      { name: '顺德餐', desc: '顺德被称为“世界美食之都”，适合用清鲜菜式体现岭南饮食文化，并作为当天节奏的舒缓收束。', en: 'Shunde cuisine: a refined expression of Lingnan food culture and a relaxed close to the day.' },
      { name: '祖籍线索定制', desc: '如家族线索与增城、东莞等地相关，可在出发前收集祖籍资料，并结合当地确认情况作个性化沟通。', en: 'Heritage customization: family clues can be reviewed before departure and discussed with local confirmation.' },
    ],
  },
  {
    no: '04', cityEn: 'JIANGMEN', cityCn: '江门 / 中山',
    stops: ['五邑华侨华人博物馆', '启明里 / 长堤历史街区', '中山祖籍寻访', '五邑风味餐'],
    stopsEn: ['Wuyi Overseas Chinese Museum', 'Qimingli / Changdi historic district', 'Zhongshan heritage visits', 'Wuyi regional cuisine'],
    hotel: '住：江门', hotelEn: 'Stay: Jiangmen',
    body: '江门五邑是理解海外华侨故事的核心一站。博物馆、老街区与侨乡建筑连在一起，让“出洋”“侨批”“回乡建屋”不再只是历史词汇。',
    bodyEn: 'Jiangmen and Wuyi are central to understanding overseas Chinese history. Museums, old streets and hometown architecture turn departure, remittance letters and return-home houses into visible stories.',
    short: '如祖籍与中山相关，可把村名、旧照片和亲友线索带到现场，安排更有温度的寻访。',
    shortEn: 'Travelers with Zhongshan roots may bring village names, old photos and family clues into a more personal visit.',
    quote: 'Wuyi remembers departures, letters, remittances, and the long road home.',
    attractions: [
      { name: '五邑华侨华人博物馆', desc: '系统呈现五邑人出洋、侨批、汇款、侨乡建设和海外家族联系，是本线侨史理解的重点。', en: 'Wuyi Overseas Chinese Museum: the key stop for understanding overseas Chinese history from the Wuyi region.' },
      { name: '启明里 / 长堤历史街区', desc: '通过街巷、骑楼和旧建筑看江门近代商业与侨乡生活的连接。', en: 'Qimingli / Changdi historic district: old streets linking commerce and hometown life.' },
      { name: '中山祖籍寻访', desc: '如您的祖籍线索与中山相关，可按线索安排宗祠外观、村落、老街或亲友会面。', en: 'Zhongshan heritage visits: tailored around your Zhongshan ancestral clues.' },
      { name: '五邑风味餐', desc: '用地方菜式延续侨乡记忆，让历史从展厅回到餐桌。', en: 'Wuyi regional cuisine: a table-level continuation of hometown memory.' },
    ],
  },
  {
    no: '05', cityEn: 'TAISHAN', cityCn: '台山',
    stops: ['台山侨乡轻访', '台山市侨联', '侨商座谈交流会', '联谊晚餐'],
    stopsEn: ['Light Taishan hometown visit', 'Taishan Overseas Chinese Federation', 'Overseas Chinese business exchange', 'Friendship dinner'],
    hotel: '住：台山', hotelEn: 'Stay: Taishan',
    body: '台山是广东侨乡记忆最浓的一段。这里安排轻访与座谈，不只是“参观”，而是让海外侨胞与本地侨联、侨商和乡亲真正坐下来交流。',
    bodyEn: 'Taishan carries one of the strongest overseas Chinese hometown memories in Guangdong. The day is not just for visiting, but for real conversation with local overseas Chinese organizations, business representatives and hometown hosts.',
    short: '一场座谈，一张合影，一段自由交流，往往比多走一个景点更珍贵。',
    shortEn: 'A meeting, a group photo and time for open conversation can be more meaningful than one more scenic stop.',
    quote: 'Taishan becomes a meeting room for hometown ties, overseas stories, and shared futures.',
    attractions: [
      { name: '台山侨乡轻访', desc: '精选侨乡街区、村落或代表性建筑轻访，以慢节奏理解台山侨乡气质。', en: 'Taishan hometown visit: a gentle look at streets, villages or representative hometown architecture.' },
      { name: '台山市侨联', desc: '作为侨乡交流的重要联络方，协助搭建海外侨胞与本地资源之间的沟通场景。', en: 'Taishan Overseas Chinese Federation: a key bridge for hometown exchange.' },
      { name: '侨商座谈交流会', desc: '围绕侨乡变化、产业发展、回乡联系和新西兰侨胞关心的问题展开交流。', en: 'Overseas Chinese business exchange: dialogue on hometown change, business and community links.' },
      { name: '联谊晚餐', desc: '让正式交流回到轻松饭桌，适合会友、续谈和拍照留念。', en: 'Friendship dinner: a relaxed setting for conversation and memory-making.' },
    ],
  },
  {
    no: '06', cityEn: 'KAIPING · SHENZHEN', cityCn: '台山 / 开平 / 深圳',
    stops: ['精选一处侨乡点', '下午赴深圳', '深圳湾公园 / 人才公园', '清淡晚餐'],
    stopsEn: ['Selected hometown site', 'Afternoon transfer to Shenzhen', 'Shenzhen Bay Park / Talent Park', 'Light dinner'],
    hotel: '住：深圳', hotelEn: 'Stay: Shenzhen',
    body: '上午精选台山或开平一处侨乡点慢访，下午转入深圳。行程从旧侨乡走向现代湾区，傍晚用深圳湾的海风和城市天际线完成节奏转换。',
    bodyEn: 'The morning features a carefully selected Taishan or Kaiping hometown site, then continues to Shenzhen. The journey shifts from old hometown architecture to the modern Greater Bay Area skyline.',
    short: '这一天的重点不是多走，而是看见广东从侨乡到湾区的变化。',
    shortEn: "The day is not about adding stops, but about seeing Guangdong's shift from hometown villages to a modern bay city.",
    quote: 'From overseas Chinese villages to Shenzhen’s open shoreline, the route changes its light.',
    attractions: [
      { name: '精选侨乡点', desc: '从台山或开平中精选代表性侨乡街区、碉楼建筑或村落点，在舒适节奏中看见侨乡建筑与家族故事。', en: 'Selected hometown site: chosen from Taishan or Kaiping for a comfortable look at hometown architecture and family stories.' },
      { name: '深圳湾公园', desc: '深圳最适合轻松散步的滨海空间之一，可远眺城市天际线与湾区海岸。', en: 'Shenzhen Bay Park: an easy waterfront walk with skyline views.' },
      { name: '人才公园', desc: '以开放湖景和现代城市公共空间展现深圳的年轻气质，适合傍晚轻游。', en: "Talent Park: a modern urban park showing Shenzhen's contemporary public-space style." },
      { name: '清淡晚餐', desc: '以清爽、好消化的菜式收束一天，为第二天的康养安排保留好状态。', en: 'Light dinner: a refreshing meal to close the day and prepare for the wellness program.' },
    ],
  },
  {
    no: '07', cityEn: 'SHENZHEN', cityCn: '深圳',
    stops: ['健康体检', '基础健康评估', '酒店静养休息', '舒缓节奏'],
    stopsEn: ['Health check', 'Basic health assessment', 'Hotel rest', 'Gentle pacing'],
    hotel: '住：深圳', hotelEn: 'Stay: Shenzhen',
    body: '深圳段特别留出一日给身体。上午安排健康体检与基础评估，下午回酒店静养休息，让康养真正成为旅程里的放松时刻。',
    bodyEn: 'The Shenzhen segment includes a dedicated day for wellbeing. The morning is arranged for a health check and basic assessment, while the afternoon is reserved for quiet hotel rest.',
    short: '对长途回国旅行来说，休息本身就是重要安排。',
    shortEn: 'For a long homecoming journey, rest itself is an important part of the itinerary.',
    quote: 'A quiet day for health checks, rest, and a more humane travel rhythm.',
    attractions: [
      { name: '健康体检', desc: '了解基础健康情况，为后续旅行和日常康养提供参考，项目将按预约安排进行。', en: 'Health check: a general review for personal wellness reference.' },
      { name: '基础健康评估', desc: '结合体检项目进行基础评估，让后续行程更安心从容。', en: 'Basic health assessment: supporting a more confident and comfortable journey.' },
      { name: '酒店静养休息', desc: '体检后保留充足恢复时间，让身体得到真正放松。', en: 'Hotel rest: protected recovery time after the health check.' },
      { name: '舒缓节奏', desc: '当天保留充足休息时间，让康养安排更舒服、更从容。', en: 'Gentle pacing: the day stays focused on comfort and recovery.' },
    ],
  },
  {
    no: '08', cityEn: 'SHENZHEN', cityCn: '深圳',
    stops: ['中医康养体验', '口腔护理', '深圳改革开放展览馆', '城市风味餐'],
    stopsEn: ['TCM wellness experience', 'Oral care', 'Shenzhen Reform and Opening-up Exhibition Hall', 'City-style dinner'],
    hotel: '住：深圳', hotelEn: 'Stay: Shenzhen',
    body: '上午以中医康养体验、口腔护理等轻松服务为主，下午进入深圳改革开放展览馆。身体放松之后，再看深圳四十多年的城市变化，会更有代入感。',
    bodyEn: 'The morning focuses on gentle wellness experiences such as TCM-style relaxation and oral care, followed by the Shenzhen Reform and Opening-up Exhibition Hall.',
    short: '这一天把“照顾身体”和“看见今天中国”放在一起。',
    shortEn: 'This day brings physical care and present-day China into the same experience.',
    quote: 'Wellness, oral care, and the story of reform meet in one Shenzhen day.',
    attractions: [
      { name: '中医康养体验', desc: '以放松、舒缓和体质咨询为主，适合长途旅行后的身体恢复。', en: 'TCM wellness experience: focused on relaxation and body-condition consultation.' },
      { name: '口腔护理', desc: '安排基础口腔护理与清洁服务，并结合现场评估提供适合的项目建议。', en: 'Oral care: basic cleaning and care, with suggestions based on on-site assessment.' },
      { name: '深圳改革开放展览馆', desc: '系统呈现深圳从边陲小镇到现代都市的发展，是理解当代中国变化的重要窗口。', en: "Shenzhen Reform and Opening-up Exhibition Hall: a key window into modern China's transformation." },
      { name: '城市风味餐', desc: '以轻松晚餐收束深圳段，兼顾交流和休息。', en: 'City-style dinner: a relaxed close to the Shenzhen day.' },
    ],
  },
  {
    no: '09', cityEn: 'RETURN', cityCn: '深圳 / 广州',
    stops: ['不安排活动', '按航班送机', '深圳机场 / 广州机场', '返程'],
    stopsEn: ['No scheduled activities', 'Airport transfer by flight time', 'Shenzhen or Guangzhou airport', 'Departure'],
    hotel: '住：飞机上 / 返程', hotelEn: 'Stay: In flight / return journey',
    body: '最后一天只保留送机，不安排景点和购物。根据航班时间从深圳或广州出发，把行李、证件、退房和机场衔接做得从容清楚。',
    bodyEn: 'The final day is kept for airport transfer only, with no sightseeing or shopping. Departure is arranged according to flight time from Shenzhen or Guangzhou, keeping luggage, documents, check-out and transfer smooth.',
    short: '行程收尾越简单，返程越从容安心。',
    shortEn: 'The simpler the ending, the more comfortable the departure.',
    quote: 'The journey closes simply, with time kept clear for departure and memory.',
    attractions: [
      { name: '深圳机场 / 广州机场', desc: '根据国际航班和后续衔接选择送机城市，提前核对出发时间。', en: 'Shenzhen or Guangzhou Airport: selected according to flight connection and timing.' },
      { name: '返程协助', desc: '提醒证件、行李、药品、支付和电话卡等事项，保证回程清楚顺畅。', en: 'Departure assistance: reminders for documents, luggage, medication, payment and SIM cards.' },
    ],
  },
];

const paymentItems: ServiceItem[] = [
  { no: '01', title: '出发前指导下载支付宝、微信。', en: 'Pre-departure guidance for downloading Alipay and WeChat.' },
  { no: '02', title: '协助绑定 Visa / Mastercard 等境外银行卡。', en: 'Assistance with binding overseas bank cards such as Visa and Mastercard.' },
  { no: '03', title: '指导完成护照实名验证。', en: 'Guidance for completing passport-based real-name verification.' },
  { no: '04', title: '检查新西兰手机号能否接收验证码。', en: 'Check whether the New Zealand mobile number can receive verification codes.' },
  { no: '05', title: '提醒开通国际漫游、购买 eSIM，或抵达后协助办理中国电话卡。', en: 'Reminders for roaming, eSIM purchase, or assistance with a China SIM card after arrival.' },
  { no: '06', title: '抵达中国首日安排支付测试：扫码付款、出示付款码、打车或小额消费测试。', en: 'First-day payment test: QR-code payment, payment-code display, taxi or small purchase test.' },
  { no: '07', title: '如您不熟悉手机支付，可提供一对一协助。', en: 'One-to-one support is available if you are unfamiliar with mobile payment.' },
  { no: '提示', title: '服务包含协助、指导和测试；实际支付体验会受到平台、银行、网络和商户受理情况影响。', en: 'This service includes assistance, guidance and testing; actual payment use may depend on platform, bank, network and merchant acceptance.' },
];

function GoldRule() {
  return <div className="mb-5 h-0.5 w-12 bg-[#b88728]" />;
}

function SidePanel({ no, cityEn, cityCn, stops, stopsEn, hotel, hotelEn }: Omit<Day, 'body' | 'bodyEn' | 'short' | 'shortEn' | 'quote' | 'attractions'>) {
  return (
    <aside>
      <div className="mb-5 font-serif text-6xl font-medium leading-none text-[#111] sm:text-7xl">{no}</div>
      <GoldRule />
      <div className="mb-3 font-sans text-sm font-bold uppercase tracking-[0.12em] text-[#8d8a84] sm:text-base">{cityEn}</div>
      <div className="mb-8 font-sans text-2xl font-bold leading-snug text-[#111]">{cityCn}</div>
      <p className="mb-3 whitespace-pre-line font-sans text-lg font-bold leading-relaxed text-[#8d8a84]">{stops.join('\n')}</p>
      <p className="mb-6 whitespace-pre-line font-serif text-sm italic leading-relaxed text-[#aaa39a]">{stopsEn.join('\n')}</p>
      <p className="mb-2 font-sans text-lg font-bold leading-relaxed text-[#8d8a84]">{hotel}</p>
      <p className="font-serif text-sm italic leading-relaxed text-[#aaa39a]">{hotelEn}</p>
    </aside>
  );
}

function PhotoSlots() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {['PHOTO 01', 'PHOTO 02'].map((label) => (
        <div key={label} className="flex min-h-72 items-center justify-center border border-dashed border-[#cfc6b9] bg-gradient-to-br from-[#b88728]/5 to-white/80 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#b5ada2]">
          {label}
        </div>
      ))}
    </div>
  );
}

function AttractionGrid({ attractions }: { attractions: Attraction[] }) {
  return (
    <div className="mt-7 grid gap-x-6 gap-y-4 md:grid-cols-2">
      {attractions.map((item) => (
        <div key={item.name} className="border-t border-[#dfd9ce] pt-3 font-sans text-base leading-relaxed text-[#4a463f]">
          <span className="mb-1 block text-xl font-bold leading-snug text-[#111]">{item.name}</span>
          {item.desc}
          <span className="mt-1 block font-serif text-sm italic leading-relaxed text-[#8d8a84]">{item.en}</span>
        </div>
      ))}
    </div>
  );
}

function ItineraryCard({ day }: { day: Day; key?: React.Key }) {
  return (
    <section className="my-6 grid gap-8 rounded-[18px] border border-[#dfd9ce] bg-white px-7 py-9 md:grid-cols-[260px_1fr] md:gap-11 md:px-14 md:py-12">
      <SidePanel {...day} />
      <div className="self-center">
        <p className="mb-5 max-w-3xl font-serif text-2xl leading-[1.82] text-[#111] md:text-[28px]">{day.body}</p>
        <p className="mb-5 max-w-3xl font-serif text-lg italic leading-relaxed text-[#8d8a84]">{day.bodyEn}</p>
        <p className="mb-4 max-w-3xl font-serif text-xl leading-[1.78] text-[#111] md:text-2xl">{day.short}</p>
        <p className="mb-5 max-w-3xl font-serif text-base italic leading-relaxed text-[#8d8a84]">{day.shortEn}</p>
        <div className="mt-6 grid max-w-2xl grid-cols-[3px_1fr] gap-5 font-serif text-xl italic leading-relaxed text-[#8d8a84]">
          <span className="mt-1 min-h-20 bg-[#b88728]" />
          <span>{day.quote}</span>
        </div>
        <AttractionGrid attractions={day.attractions} />
        <PhotoSlots />
      </div>
    </section>
  );
}

function ProductCover() {
  return (
    <section className="relative mb-7 grid min-h-[640px] items-center gap-12 border border-[#dfd9ce] bg-white px-7 py-10 md:grid-cols-[32%_1fr] md:px-16 md:py-14 lg:px-20">
      <img className="absolute right-8 top-8 hidden w-28 md:block" src={wtLogo} alt="WT Cultural Exchange & Tourism Limited" />
      <div className="min-h-80 overflow-hidden bg-[#f3f0eb] md:min-h-[500px]">
        <img className="h-full min-h-80 w-full object-cover md:min-h-[500px]" src={lingnanCover} alt="岭南侨乡建筑主视觉" />
      </div>
      <div className="md:pt-16">
        <img className="mb-8 ml-auto w-24 md:hidden" src={wtLogo} alt="WT Cultural Exchange & Tourism Limited" />
        <div className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#b88728]">LINGNAN OVERSEAS CHINESE JOURNEY</div>
        <h1 className="mb-6 font-serif text-5xl font-medium leading-[1.08] text-[#111] sm:text-6xl lg:text-[82px]">粤山粤水<br />侨见岭南</h1>
        <p className="mb-8 font-serif text-2xl italic leading-snug text-[#8d8a84] md:text-[26px]">A Gentle Lingnan Homecoming</p>
        <p className="max-w-3xl font-serif text-xl leading-loose text-[#3e3a35]">从广州出发，沿着广府老城、番禺乡脉、佛山顺德园林、五邑侨乡与深圳湾区一路慢行。看见岭南山水与家族记忆，也把康养、交流和从容休息放进旅程。</p>
        <p className="mt-3 max-w-3xl font-serif text-base italic leading-relaxed text-[#8d8a84]">A gentle 9-day Lingnan journey from Guangzhou, following old Canton, Panyu hometown roots, Foshan and Shunde gardens, Wuyi overseas Chinese heritage and modern Shenzhen, with time for wellness, exchange and unhurried rest.</p>
        <div className="mt-9 border-t border-[#dfd9ce] pt-6 font-sans text-sm font-bold uppercase leading-relaxed tracking-[0.08em] text-[#8d8a84]">广州 · 番禺 · 佛山顺德 · 江门五邑 · 台山 · 开平 · 深圳 · 广州/深圳返程</div>
      </div>
    </section>
  );
}

function ProductOverview() {
  return (
    <section className="my-6 rounded-[18px] border border-[#dfd9ce] bg-white px-7 py-9 md:px-16 md:py-14">
      <div className="mb-9 grid gap-8 md:grid-cols-[270px_1fr] md:items-end">
        <aside>
          <div className="mb-5 font-serif text-6xl font-medium leading-none text-[#111] sm:text-7xl">09</div>
          <GoldRule />
          <div className="mb-3 font-sans text-sm font-bold uppercase tracking-[0.12em] text-[#8d8a84]">JOURNEY OVERVIEW</div>
          <div className="font-sans text-2xl font-bold text-[#111]">行程总览</div>
        </aside>
        <div>
          <h2 className="mb-3 font-serif text-4xl font-medium leading-tight text-[#111] md:text-5xl">先看懂这条岭南回程</h2>
          <p className="max-w-3xl font-serif text-xl leading-loose text-[#3e3a35]">这是一条以广州为起点、串联广府文化、祖籍乡脉、五邑侨史、台山交流与深圳康养的舒缓旅程。每天保留重点，不赶行程，让旅途有时间看、吃、聊，也有时间休息。</p>
          <p className="mt-2 max-w-3xl font-serif text-base italic leading-relaxed text-[#8d8a84]">A gentle Lingnan homecoming route from Guangzhou, connecting Cantonese culture, ancestral roots, Wuyi overseas Chinese heritage, Taishan exchange and Shenzhen wellness at an unhurried pace.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {overviewDays.map(([day, title, desc, en]) => (
          <div key={day} className="border-t border-[#dfd9ce] pt-4">
            <b className="mb-2 block font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#b88728]">{day}</b>
            <strong className="mb-1 block font-sans text-xl font-bold text-[#111]">{title}</strong>
            <span className="block font-sans text-base leading-relaxed text-[#4a463f]">{desc}</span>
            <em className="mt-1 block font-serif text-sm italic leading-relaxed text-[#8d8a84]">{en}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

function PaymentSupportCard() {
  return (
    <section className="my-6 grid gap-8 rounded-[18px] border border-[#dfd9ce] bg-white px-7 py-9 md:grid-cols-[260px_1fr] md:gap-11 md:px-14 md:py-12">
      <SidePanel
        no="PAY"
        cityEn="MOBILE PAYMENT"
        cityCn="入境支付协助"
        stops={['支付宝 / 微信', '境外银行卡', '护照实名验证', '首日支付测试']}
        stopsEn={['Alipay / WeChat Pay', 'Overseas bank cards', 'Passport verification', 'First-day payment test']}
        hotel="适合：新西兰华人家庭与回国探亲寻根行程"
        hotelEn="For: New Zealand Chinese families and homecoming heritage journeys"
      />
      <div>
        <p className="mb-5 max-w-3xl font-serif text-2xl leading-[1.82] text-[#111] md:text-[28px]">出发前将协助完成中国移动支付准备，并在抵达中国首日安排一次小额支付测试，让用车、用餐、购物和景区消费更安心。</p>
        <p className="mb-5 max-w-3xl font-serif text-lg italic leading-relaxed text-[#8d8a84]">Before departure, mobile payment preparation for China will be supported, followed by a small payment test on the first day after arrival for greater confidence in transport, dining, shopping and scenic-area spending.</p>
        <p className="mb-4 max-w-3xl font-serif text-xl leading-[1.78] text-[#111] md:text-2xl">如您不熟悉手机支付，可获得一对一协助。</p>
        <p className="mb-5 max-w-3xl font-serif text-base italic leading-relaxed text-[#8d8a84]">If you are less familiar with mobile payment, one-to-one assistance is available.</p>
        <div className="mt-6 grid max-w-2xl grid-cols-[3px_1fr] gap-5 font-serif text-xl italic leading-relaxed text-[#8d8a84]"><span className="mt-1 min-h-20 bg-[#b88728]" /><span>Payment preparation is part of arrival care: practical, patient, and tested on the first day.</span></div>
        <div className="mt-7 grid gap-x-6 gap-y-4 md:grid-cols-2">
          {paymentItems.map((item) => (
            <div key={item.no} className="border-t border-[#dfd9ce] pt-3 font-sans text-lg font-bold leading-relaxed text-[#4a463f]">
              <b className="mr-2 font-sans text-[#b88728] tracking-wider">{item.no}</b>{item.title}
              <span className="mt-1 block font-serif text-sm font-normal italic leading-relaxed text-[#8d8a84]">{item.en}</span>
            </div>
          ))}
        </div>
        <div className="mt-7 max-w-3xl border-l-[3px] border-[#b88728] pl-5 font-serif text-xl italic leading-relaxed text-[#8d8a84]">Payment support includes pre-departure guidance for Alipay and WeChat Pay setup, overseas bank card binding, passport verification, mobile verification-code checks, roaming/eSIM or China SIM-card advice, and a first-day small payment test after arrival. Actual use depends on platform, bank, network and merchant acceptance.</div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#111] selection:bg-[#b88728]/20 selection:text-[#111]">
      <div className="mx-auto w-[min(1180px,calc(100vw-24px))] py-5 md:w-[min(1180px,calc(100vw-48px))] md:py-10">
        <ProductCover />
        <ProductOverview />
        {itineraryDays.map((day) => <ItineraryCard key={day.no} day={day} />)}
        <PaymentSupportCard />
        <div className="mt-8 text-center font-sans text-sm leading-relaxed text-[#aaa39a]">专注海外侨胞回乡寻根与家族旅行服务 · 祖籍寻访、交流活动与康养项目将根据当地预约、身体情况和实际接待条件妥善安排</div>
        <div className="mx-auto mt-2 max-w-4xl text-center font-serif text-sm italic leading-relaxed text-[#aaa39a]">Specialized in homecoming, heritage and family travel services for overseas Chinese communities. Heritage visits, exchange activities and wellness services will be arranged according to local confirmation, traveler wellbeing and actual reception conditions.</div>
      </div>
    </main>
  );
}
