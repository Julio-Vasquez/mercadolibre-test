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
    <Col className={search} span={24}>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} align="middle">
        <Col className={search}
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 18, offset: 3 }}
          md={{ span: 16, offset: 4 }}
          lg={{ span: 12, offset: 6 }}

        >
          <div className={search_container}>

            <div className={pdr}>
              <img src={LogoML} alt="Mercado Libre argentina" />
            </div>


            <AutoComplete
              className={autocomplete}
              onSelect={autoComplete.onSelect}
              options={autoComplete.options}
              onSearch={autoComplete.onSearch}
              onKeyDown={autoComplete.handleEnter}
            >
              <Input.Search
                placeholder="Buscar"
                size="middle"
                enterButton
                onSearch={autoComplete.onSubmitSearch}
              />
            </AutoComplete>
          </div>
        </Col>
      </Row >
    </Col >
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
