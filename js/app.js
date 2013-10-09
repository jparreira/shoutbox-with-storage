xRTML.load(function() {

	// CHANGE THIS TO YOUR REALTIME.CO APPLICATION KEY
	// FOR SIMPLICITY THIS EXAMPLE USES AN APPLICATION KEY WITHOUT AUTHENTICATION
	var applicationKey = "2Ze1dz";

	// THE REALTIME CONNECTION USED BY SHOUTBOX
	xRTML.ConnectionManager.create({
		id: 'myConnection',
		appKey: applicationKey,
		authToken: 'myAuthToken',
		url: 'http://ortc-developers.realtime.co/server/2.1',
		channels: [{
			name: 'myChannel'
		}]
	});

	var storageRef;
	var shoutboxId = "chatRoomId";
	var tableName = "ShoutboxMessages";

	var startChat = function() {
		xRTML.TagManager.create({
			name: 'Shoutbox',
			id: shoutboxId,
			target: "#target-shoutbox",
			channelId: "myChannel",
			connections: ['myConnection'],
			triggers: ['myTrigger'],
			template: "myTemplate"
		}, function(tag) {
			
			// GET ALL SHOUTBOX ITEMS FROM STORAGE FOR CHAT-ROOM ID

			var tableRef = storageRef.table(tableName).equals({
				item: "id",
				value: shoutboxId
			});

			tableRef.getItems(function(is) {
				if (is) {
					// ADD TO SHOUTBOX UI EACH SHOUTBOX ITEM SAVED AT STORAGE
					tag.post({
						name: is.val().name,
						content: is.val().content,
						date: new Date(is.val().timestamp)
					});
				}
			});

			
			// BIND TO THE MESSAGEPOST EVENT
			tag.bind({
				messagePost: function(e) {
					// SAVE THE NEW MESSAGE TO THE STORAGE
					tableRef.push({
						id: shoutboxId,
						timestamp: +new Date(e.message.date),
						name: e.message.name,
						content: e.message.content
					});
				}
			});
		});
	};

	// CONNECT TO THE REALTIME CLOUD STORAGE

	Realtime.Storage.create({
		applicationKey: applicationKey,
		authenticationToken: "myAuthToken"
	}, function(sr) {
		storageRef = sr;
		startChat();
	});
});