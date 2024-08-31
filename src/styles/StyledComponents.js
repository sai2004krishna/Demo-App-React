import styled from 'styled-components';

export const Navbar=styled.div`
  padding: 15px;
  background: linear-gradient(135deg, #020202, #040404);
  color: white;
  text-align: left;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const ProductGrid=styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  gap:20px;
  margin:20px;
`;

export const AppContainer=styled.div`
  margin:20px auto;
  padding:30px;
  background:white;
  border-radius:10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  max-width: 1200px;
`;

export const CartButton=styled.button`
  background:linear-gradient(135deg,#007bff,#00bfff);
  color:white;
  border:none;
  padding:12px 20px;
  border-radius:25px;
  cursor:pointer;
  font-size:1.1rem;
  transition:background 0.3s ease, transform 0.3s ease;
  margin-top:20px;
  
  &:hover {
    background:linear-gradient(135deg, #0056b3, #007bff);
    transform:translateY(-3px);
  }
`;

export const Button = styled.button`
  background: ${props =>props.inCart ?'linear-gradient(135deg, #d9534f, #c9302c)':'linear-gradient(135deg, #5bc0de, #31b0d5)'};
  color:white;
  border:none;
  padding:10px 15px;
  border-radius:25px;
  cursor:pointer;
  font-size:1rem;
  transition:background 0.3s ease, transform 0.3s ease;
  margin-top:10px;
  
  &:hover {
    background:${props =>props.inCart ?'linear-gradient(135deg, #c9302c, #d9534f)' :'linear-gradient(135deg, #31b0d5, #5bc0de)'};
    transform:translateY(-2px);
  }
`;

export const CartContainer=styled.div`
  padding:20px;
  background:#f7f7f7;
  border-radius:10px;
  box-shadow:0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top:20px;
`;

export const Item=styled.div`
  display:grid;
  grid-template-columns:1fr auto;
  padding:10px 0;
  border-bottom:1px solid #030303;
  font-size:1.1rem;
`;

export const Clear = styled.button`
  background:linear-gradient(135deg, #d9534f, #c9302c);
  color:white;
  border:none;
  padding:10px 20px;
  border-radius:25px;
  cursor:pointer;
  font-size:1rem;
  transition:background 0.3s ease, transform 0.3s ease;
  margin-top:20px;
  
  &:hover {
    background:linear-gradient(135deg, #c9302c, #d9534f);
    transform:translateY(-3px);
  }
`;

export const Card =styled.div`
  border:1px solid #ddd;
  padding:15px;
  margin:10px;
  text-align:center;
  border-radius:10px;
  background:white;
  box-shadow:0 8px 15px rgba(0, 0, 0, 0.1);
  transition:transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform:translateY(-5px);
    box-shadow:0 12px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const PImage =styled.img`
  width: 100%;
  height: auto;
  max-width: 150px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

