var caps = [
    {
        // Windows10 Chrome latest
        "os": "Windows",
        "os_version": "10",
        "browserName": "Chrome",
        "resolution": "1280x1024",
        "browser_version": "latest",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // Windows10 IE 11
        "os": "Windows",
        "os_version": "10",
        "browserName": "IE",
        "resolution": "1280x1024",
        "browser_version": "11.0",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // Windows10 Edge latest
        "os": "Windows",
        "os_version": "10",
        "browserName": "Edge",
        "resolution": "1280x1024",
        "browser_version": "latest",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // Windows10 Firefox latest
        "os": "Windows",
        "os_version": "10",
        "browserName": "Firefox",
        "resolution": "1280x1024",
        "browser_version": "latest",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // Windows8.1 Chrome latest
        "os": "Windows",
        "os_version": "8.1",
        "browserName": "Chrome",
        "browser_version": "latest",
        "resolution": "1280x1024",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // Windows8.1 IE 11
        "os": "Windows",
        "os_version": "8.1",
        "browserName": "IE",
        "browser_version": "11.0",
        "resolution": "1280x1024",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // Windows8.1 Edge latest
        "os": "Windows",
        "os_version": "8.1",
        "browserName": "Edge",
        "browser_version": "latest",
        "resolution": "1280x1024",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // Windows8.1 Firefox latest
        "os": "Windows",
        "os_version": "8.1",
        "browserName": "Firefox",
        "browser_version": "latest",
        "resolution": "1280x1024",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // OS X Chrome latest
        "os": "OS X",
        "os_version": "Catalina",
        "browserName": "Chrome",
        "browser_version": "latest",
        "resolution": "1280x1024",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // OS X Edge latest
        "os": "OS X",
        "os_version": "Catalina",
        "browserName": "Edge",
        "browser_version": "latest",
        "resolution": "1280x1024",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // OS X Firefox latest
        "os": "OS X",
        "os_version": "Catalina",
        "browserName": "Firefox",
        "browser_version": "latest",
        "resolution": "1280x1024",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // OS X Safari 13.1
        "os": "OS X",
        "os_version": "Catalina",
        "browserName": "Safari",
        "browser_version": "13.1",
        "resolution": "1280x1024",
        "browserstack.local": "true",
        "browserstack.debug" : "true"
    },
    {
        // iPhone 11 iOS 13
        "os_version": "13",
        "device": "iPhone 11",
        "real_mobile": "true",
        "browserstack.local": "true",
        "browserName": "iPhone"
    },
    {
        // iPad 7th iOS 13
        "os_version": "13",
        "device": "iPad 7th",
        "real_mobile": "true",
        "browserstack.local": "true",
        "browserName": "iPad"
    },
    {
        // Google Pixel 4 Android 11.0
        "os_version": "11.0",
        "device": "Google Pixel 4",
        "real_mobile": "true",
        "browserstack.local": "true",
        "browserName": "Android"
    },
    {
        // Samsung Galaxy Tab S6 Android 9.0
        "os_version": "9.0",
        "device": "Samsung Galaxy Tab S6",
        "real_mobile": "true",
        "browserstack.local": "true",
        "browserName": "Android"
    }
]

if (process.env.NODE_ENV !== 'test:bs') {
    caps = [{}]
}

module.exports = caps;
