import  Button  from '../components/button';

export default {
    title: "Components/button",
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
  };
  
  
export const ButtonDefult = () => <Button />