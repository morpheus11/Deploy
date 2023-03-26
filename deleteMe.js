class MyClass {
    constructor(callBackSuccess,callBackError,url,payload) {
      this.callBackSuccess = callBackSuccess;
      this.callBackError = callBackError;
      this.url = url;
      this.payload = payload;
      this.getData(this.callBackSuccess,this.callBackError,this.url,this.payload);                   
    };
    
    getData(callBackSuccess,callBackError,url,payload) {
      $.ajax({
        type:'GET',
        url: url,
        data:payload,
        success: (response) => {
          callBackSuccess(response);
        },
        error: (error) => {
            callBackError(error);
        },
      });
    }
  }
  
  const e = {
    parameter: {
      success: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
    },
  };

  let instMyClass = new MyClass();
  instMyClass.url = "https://script.google.com/macros/s/AKfycbxPeb5XWr7gXKFS7r_RR3VRdbMzh3OFAj0htA5BDZtmzKPXysnm8PNVYNQsuEKymPACow/exec?";
  instMyClass.payload = {
    callBack:'getOrCreateFolder',
    rootFolderId:'161YBThNHN2Rl-M7r50JnFfv_jvx_hv7O',
    folderYear:2067,
    folderDificiency:56
  };
  instMyClass.getData(e.parameter.success,e.parameter.error,instMyClass.url,instMyClass.payload);