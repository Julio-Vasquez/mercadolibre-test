import { func } from "prop-types";
import { useEffect } from "react";
import { Col, Input, AutoComplete, Row } from "antd";

import LogoML from "../../assets/svg/favicon.svg";
import {
  search,
  pdr,
  autocomplete,
  search_container,
} from "./SearchBar.module.scss";
import { Result } from "./components/Result";

import { getProducts } from "../../services/Products/ProductsSlice";
import { useAutoComplete } from "../../hooks/useAutoComplete";

export const SearchBar = () => {
  const autoComplete = useAutoComplete({
    action: getProducts,
    Result: Result,
  });

  return (
    <Row className={search} justify={"center"} align={"middle"}>
      <Col span={10} className={search_container}>
        <div className={pdr}>
          <img src={LogoML} alt="Mercado Libre argentina" />
        </div>
      </Col>
      <Col span={10}>
        <AutoComplete
          className={autocomplete}
          onSelect={autoComplete.onSelect}
          options={autoComplete.options}
          onSearch={autoComplete.onSearch}
          onKeyDown={autoComplete.handleEnter}
        >
          <Input.Search
            placeholder="Buscar"
            enterButton
            onSearch={autoComplete.onSubmitSearch}
          />
        </AutoComplete>
      </Col>
    </Row>
  );
};

const Root = ({ setSite }) => {
  useEffect(() => {
    if (setSite) setSite({ path: "Inicio", url: "/" });
  }, [setSite]);

  return <></>;
};

Root.propTypes = { setSite: func.isRequired };
export default Root;
