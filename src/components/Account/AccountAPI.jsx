import { useEffect} from 'react';


    const AccountAPI = () =>{
        useEffect(() => {
            getAccountId();
        }, [])
    const getAccountId = async (userid) => {
            return await fetch(`https://dummyjson.com/users`)
                .then(res => res.json())
                .then(console.log)
    }
    getAccountId(1)
    return (
    <div className="Account">
        <h1 className="account-title">Account</h1>
    </div>
    )
}

export default AccountAPI;