import React, { useEffect, useState } from "react";
import * as _ from "./style";
import Header from "../../components/Header";
import Company from "../../components/Company";
import { Company_Read } from "../../lib/apis/Company";

const Brand = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await Company_Read();
      setCompanies(data);
    };
    fetchCompanies();
  }, []);

  return (
    <_.Layout>
      <Header />
      <_.CategoryList>
        <_.Category>베이커리</_.Category>
        <_.Category>디저트/음료</_.Category>
        <_.Category>외식/다이닝</_.Category>
        <_.Category>한식</_.Category>
      </_.CategoryList>
      <_.Explain>
        <_.Explain_Span>K-food</_.Explain_Span>와 관련된 음식 회사
      </_.Explain>
      <_.List>
        {companies.map((company, index) => (
          <Company
            key={index}
            url={company.image}
            title={company.name}
            category={company.category}
          />
        ))}
      </_.List>
    </_.Layout>
  );
};

export default Brand;
