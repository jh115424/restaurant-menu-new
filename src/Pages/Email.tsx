import React from "react";
import { Html, Button} from "@react-email/components"

interface EmailProps {
    name: string;
    email: string;
    message: string;
  }

export function Email({name, email, message}: EmailProps) {
 
 
return (
   
 <Html>
 <Button href={`mailto:${email}`}>
     Send email to {name}
 </Button>
 <p>{message}</p>
 </Html> 
)

}


