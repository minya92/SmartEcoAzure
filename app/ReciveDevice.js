/* global P */

/**
 * 
 * @author minya92
 * @stat__eless
 * @public 
 * @constructor
 */
function ReciveDevice() {
    var self = this;
    var model = P.loadModel(this.constructor.name);
    
    /*
     * @GET /setDevice
     */
    self.setDevice = function() {
        var http = new P.HttpContext();
        return JSON.parse(http.request.body);
    };
    
    var customers = {ohio: 78, ivanovo: 67};

    /**
     * @get /customers
     * @returns {RESTTest.customers}
     */
    this.getCustomers = function (p1) {
        if(p1)
            return p1 + " "// + p2;
        else return "Her";
    };
    
    /**
     * @post /customers
     * @returns {RESTTest.customers}
     */
    this.createCustomer = function () {
        var s;
        
        try{
            s = "stage 1";
            var http = new P.HttpContext();
            s = "stage 2";
            return http.request.body;
        }catch(e){
            return s + " error!";
        }
    };
}
