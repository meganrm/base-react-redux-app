import * as React from "react";
import { MenuElement} from "../../state/metadata/types";

interface MenuList {
    menuList: MenuElement[];
}

const MenuBar: React.SFC<MenuList> = (props) => {
    const items = props.menuList.map((ele: MenuElement) => (
         <li key={ele.id}>{ele.title}</li>
    )

);
    return (
        <ul>{items}</ul>
    );
};

export default MenuBar;
