


const scriptsInEvents = {

	async Maingame_Event10_Act4(runtime, localVars)
	{
		console.log("Update Success")
	},

	async Mainmenu_Event9_Act2(runtime, localVars)
	{
		const currentDate = new Date();
		console.log(currentDate)
		runtime.globalVars.TimeStamp = currentDate
	},

	async Mainmenu_Event9_Act6(runtime, localVars)
	{
		console.log("Button CLicked")
	},

	async Mainmenu_Event10_Act2(runtime, localVars)
	{
		console.log("Post Success")
	},

	async Mainmenu_Event14_Act2(runtime, localVars)
	{
		console.log(runtime.globalVars.UserID)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

