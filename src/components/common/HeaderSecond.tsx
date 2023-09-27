import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import {IoChevronBackOutline} from "react-icons/io5"

const HeaderSecond = () => {
    const handleClick = (page: string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	};
    const logoImg = css`
        margin-left: 40%;
		height: 24px;
	`
  return (
    <div className="headerLayout">
		<div className="headerComponent">
            <div onClick={() => history.back()}><IoChevronBackOutline /></div>
			<img css={logoImg} src="/img/artiLogo.svg" onClick={handleClick('/')} />
		</div>
	</div>
  )
}

export default HeaderSecond