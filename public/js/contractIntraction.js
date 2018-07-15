$(window).on('load',async e =>{
    if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    }
     web3.eth.getAccounts().then(async res =>{
         console.log('res :', res);
         web3.eth.defaultAccount = await res[0];
     })

     var walletContract;
    await $.getJSON('./contracts/Wallet.json',async function(walletContractJSONabi) {

        walletContract = new web3.eth.Contract(
            walletContractJSONabi.abi,
            '0xc74c8d941494495a4f65c42bebc556398e1f028d' // contract address
            );

        web3.eth.getAccounts().then(async addresss=>{
        console.log('address :', addresss[1]);
        walletContract.options.from = "0x04E81B269fa963E10E04f6BeC93f3C092a7ad81e";
         console.log(await walletContract.methods.addUser(addresss[0],"sender",500).send({
            from : web3.eth.defaultAccount,
            gas :6700000
         }));
        })
    })
    window.walletContract =walletContract;
    console.log('globalWalletContract :', walletContract);
    $('#reg-btn').on('click',async e =>{
        var address = $('#user_addr').val();
        var name = $('#user_name').val();
        walletContract.methods.addUser(address,name,0).send({
            from : web3.eth.defaultAccount,
            gas :6700000
            },async (err,txhash) => {
                if(err){
                    console.log('err :', err);
                }else{
                    console.log('txhash :',await txhash);
                    $('#reg-status').html('SUCCESS');
                }
            })
       })
    $('#pay-btn').on('click',async e => {
        var reciever_address = $('#reciever_user_addr').val();
        var amount = $('#reciever_user_amount').val();
        var sender_address = web3.eth.defaultAccount;
        walletContract.methods.payAmount(reciever_address,sender_address,amount).send({
            from : web3.eth.defaultAccount,
            gas :6700000
        },async (err,txhash) =>{
            if(err){
                console.log('err :', err);
            }else{
                console.log('payment txhash :', txhash);
                web3.eth.getTransactionReceipt(txhash).then(async reciept => {
                    $('#payment-reciept').prepend('<pre class="p-4 font-semibold text-2xl text-justify">Payment Transaction Reciept</pre>');
                    for (const key in reciept) {
                        if (reciept.hasOwnProperty(key)) {
                            const element = reciept[key];

                            $('#payment-reciept').append('<li class="flex p-4 w-full "><div class="font-semibold w-1/5 sm:w-full md:w-full   text-right">'+key+'</div><div class="w-1/5  ">:</div><div class="w-3/5 sm:w-full md:w-full  text-left  ">'+element+'</div></li>');
                            console.log('element :',key, element);
                            }
                    }
                });
            }
        })

    })


})