type params = {
    email: string
    confirm_email: string
    password: string
    confirm_password: string
}

export const compareEmailandPassword = ( { email, confirm_email, password, confirm_password }: params ): boolean=>{
    
    return (email === confirm_email && password === confirm_password) ? true : false;
}