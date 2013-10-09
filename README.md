## xRTML Shoutbox using Realtime Cloud Storage
This example uses Realtime Cloud Storage to save the chat messages sent by a xRTML Shoutbox. 

For more info about the Shoutbox visit [http://docs.xrtml.org/xrtml/javascript/3-2-0/xrtml.tags.shoutbox.html](http://docs.xrtml.org/xrtml/javascript/3-2-0/xrtml.tags.shoutbox.html) and for Realtime Cloud Storage visit [http://framework.realtime.co/storage/](http://framework.realtime.co/storage/)

## About the Realtime Cloud Storage Service
Part of the [The Realtime® Framework](http://framework.realtime.co), the Realtime Cloud Storage Service is a highly-scalable backend-as-a-service powered by Amazon DynamoDB. We've added real-time notifications to keep data synchronized between users of your application.

## Signup and table configuration
This example uses a public domain application key, so don't enter any critical data if you're using this example as-is.

To get your free application key please sign-up [here](https://accounts.realtime.co/signup/)

If you want to use your own Cloud Storage you need use the web console to create a table with the following specs:


- **Name:** ShoutboxMessages
- **Primary key:** id (string) 
- **Secondary key:** timestamp (number) 

This table will be used to save the Shoutbox messages. You can use several chat rooms by changing the id value (e.g. ChatRoom1, ChatRoom2, ...)

 
## License

Licensed under the MIT license: [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)