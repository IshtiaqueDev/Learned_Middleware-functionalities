class ExpressErros extends Error{
    constructor(status,errMessage){
        super();
        this.status=status;
        this.message=errMessage;
    }
}
    module.exports=ExpressErros;