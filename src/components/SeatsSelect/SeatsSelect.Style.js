import styled from "styled-components";

export const Wrapper = styled.div `
  width: 100%;
  border: 1px solid #E5E6E6;
  margin-bottom: 40px;
`;
export const Title = styled.div `
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
  border-bottom: 1px solid #E5E6E6;
`;
export const CategoryContainer = styled.div `
  display: block;

`;

export const SubTitle = styled.div `
  width: 150px;
  padding: 20px;
  background-color: #FBFBFB;
  border-right: 1px solid #E5E6E6;
`;

export const SelectContainer = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  width: 50%;
  margin : 20px;
  margin-top: -1%;
  margin-left: 10%;
`;
export const CheckBox = styled.div `
  width: 30%;
  height: 90%;
  padding: 10px 0 20px 0;
  border: 1.5px solid #E5E6E6;
  border-radius: 10px;
  overflow: scroll;
`;
export const Check = styled.input `
  width: 20px;
  height: 20px;
  margin: 10px 10px 5px 10px;
  border: 2px solid #E5E6E6;
  cursor: pointer;
`;
export const Label = styled.label `
  display: inline-block;
  align-items: center;
`;

export const Type = styled.div `
  margin-top: 7px;
  font-weight: 700;
  font-size: 16px;
`;
export const SelectedBox = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
  overflow: scroll;
`;
export const AlertMessage = styled.div `
  color: #6C6C6C;
`;
export const SelectedCategory = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  height: 15%;
  margin-top: 15px;
  background-color: #ADA8E6;
  border: 1px solid #352F6E;
  border-radius: 5px;
`;
export const Selected = styled.div `
  font-size: 16px;
`;
export const CancelChecked = styled.button `
  width: 30px;
  height: 30px;
  background: none;
  border: none;
`;
export const FilterContainer = styled.div `
  display: flex;
  align-items: center;
  height: 7%;
  border-top: 1px solid #E5E6E6;
  border-bottom: 1px solid #E5E6E6;
`;

export const SearchBar = styled.form `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 79%;
  height: 75%;
  margin-left: 18px;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
`;

export const SearchInput = styled.input `
  width: 85%;
  border-radius: 10px;
  padding: 9px;
`;

export const SearchButton = styled.button `
  width: 13%;
  background: none;
  border: 1px solid #352F6E;
  border-radius: 10px;
  padding: 5px 0px;
`;

export const ProductNameContainer = styled.div `
  display: flex;
  align-items: center;
  height: 7%;
  border-bottom: 1px solid #E5E6E6;
`;

export const ProductBar = styled.form `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 100%;
`;

export const ProductSearch = styled.select `
  width: 92%;
  height: 75%;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
  padding-left: 7px;
`;

export const ProductCode = styled.div `
  display: flex;
  width: 30%;
  height: 100%;
`;

export const Code = styled.div `
  display: flex;
  padding-left: 20px;
  align-items: center;
  width: 35%;
  height: 100%;
  background-color: #FBFBFB;
  border-right: 1px solid #E5E6E6;
`;

export const ShowingCode = styled.div `
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const ProductIntro = styled.div `
  display: flex;
  align-items: center;
  height: 7%;
  border-bottom: 1px solid #E5E6E6;
`;

export const InfoInput = styled.input `
  width: 79%;
  margin-left: 15px;
  padding: 9px;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
`;
export const ProductThumbnail = styled.div `
  display: flex;
  border-bottom: 1px solid #E5E6E6;
`;

export const AttachedButton = styled.button `
  width: 280px;
  height: 60px;
  margin-left: 15px;
  background: none;
  border: 1px solid #352F6E;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #E5E6E6;
  }
`;
export const FileName = styled.div `
  margin: 10px 0 10px 15px;
`;
export const Cancel = styled.button `
  width: 30px;
  height: 30px;
  margin-left: 15px;
  font-size: 20px;
  text-align: center;
  border-radius: 15px;
  background: none;
  border: 1px solid #E5E6E6;
`;
export const ProductImg = styled.div `
  display: flex;
  border-bottom: 1px solid #E5E6E6;
`;

export const AttachedBox = styled.div `
  width: 30%;
  height: 90%;
`;
export const FileList = styled.div `
  display: flex;
  flex-direction: column;
  height: 90%;
  margin-left: -5px;
`;
export const StockContainer = styled.div `
  display: flex;
  align-items: center;
  height: 6.5%;
`;

export const StockNum = styled.div `
  margin-left: 20px;
`;

export const ContentWrap = styled.div ``;