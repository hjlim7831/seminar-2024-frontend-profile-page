import { List } from "@mui/material";
import { blue, green, red, yellow } from "@mui/material/colors";

import AchievementItem, { type AchievementItemProps } from "./AchievementItem";

const achievementContents: AchievementItemProps[] = [
    {
        title: "개발 잡부",
        description: "프론트와 백엔드 같이 수정 배포하기",
        color: "black"
    },
    {
        title: "월급 루팡",
        description: "회사에서 업무시간에 게임하기",
        color: yellow["700"]
    },
    {
        title: "날씨 연구의 기초",
        description: "대학원생으로 논문 써보기",
        color: blue["300"]
    },
    {
        title: "모바일 게임 중독자",
        description: "구글 플레이스토어에서 500개 이상 다운",
        color: red["300"]
    },
    {
        title: "말티즈 발닦개 숙련자",
        description: "14년간 말티즈의 발을 닦음",
    },
    {
        title: "운동 찍먹러",
        description: "배드민턴, 러닝, 등산, 클라이밍, 걷기, 홈트",
        color: green[500]
    },
]

const AchievementList = () => {
    return (
        <List sx={{ maxWidth: 360, width: '100%' }}>
            {achievementContents.map((a:AchievementItemProps) => (
                <AchievementItem key={a.title} {...a}/>
            ))}
        </List>
    )
}

export default AchievementList;