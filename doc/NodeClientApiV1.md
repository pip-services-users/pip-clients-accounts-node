# Client API (version 1) <br/> Users Microservices Client SDK for Node.js

Node.js client API for Users microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [User class](#class1)
* [UserPage class](#class2)
* [IUsersClient interface](#interface)
    - [init()](#operation1)
    - [open()](#operation2)
    - [close()](#operation3)
    - [getUsers()](#operation4)
    - [findUser()](#operation5)
    - [getUsetById()](#operation6)
    - [createUser()](#operation7)
    - [updateUser()](#operation8)
    - [deleteUser()](#operation9)
* [UsersRestClient class](#client_rest)
* [UsersSenecaClient class](#client_seneca)
* [UsersNullClient class](#client_null)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-users-node": "git+ssh://git@github.com:pip-services/pip-clients-users-node.git",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

If you are using Typescript, add the following type definition where compiler can find it
```javascript
/// <reference path="../node_modules/pip-clients-users-node/module.d.ts" />
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
var sdk = new require('pip-clients-users-node').Version1;

// Client configuration
var config = {
    transport: {
        type: 'http',
        host: 'localhost', 
        port: 8009
    }
};

// Create the client instance
var client = sdk.UsersRestClient(config);

// Open client connection to the microservice
client.open(function(err) {
    if (err) {
        console.error(err);
        return; 
    }
    
    console.log('Opened connection');
        
    // Register a new user
    client.createUser(
        { 
            name: 'Test User',
            email: 'somebody@somewhere.com',
            password: 'test123'
        },
        function (err, user) {
            if (err) {
                console.error(err);
                return;
            }
            
            console.log('Registered user account is');
            console.log(user);
            
            // Find created user
            client.findUser(
                null,
                'somebody@somewhere.com',
                function(err, user) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    
                    console.log('Found user is');
                    console.log(user);
                    
                    // Close connection
                    client.close(); 
                }
            );
        }
    );
});
```

## Data types

### <a name="class1"></a> User class

Represents a user account with his ID, name, email, password and key settings.
It also tracks signup/signin dates and authentication attempts. 

**Properties:**
- id: string - unique user id
- name: string - full user name (first and last name)
- email: string - primary user email that is unique and used as login
- created: Date - date and time when user account was created
- active: boolean - true if user account is active, and false for disabled accounts
- time_zone: int - user selected timezone
- language: string - user selected language (and culture)
- theme: string - user selected application color theme
- custom_hdr: Object - custom data summary that is always returned (in list and details)
- custom_dat: Object - custom data details that is returned only when a single object is returned (details)

### <a name="class2"></a> UserPage class

Represents a paged result with subset of requested User objects

**Properties:**
- data: [User] - array of retrieved User page
- count: int - total number of objects in retrieved resultset

## <a name="interface"></a> IUsersClient interface

If you are using Typescript, you can use IUsersClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IUsersClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IUsersClient {
    init(refs, callback);
    open(callback);
    close(callback);
    getUsers(filter, paging, callback);
    findUser(userId, email, callback);
    getUserById(userId, callback);
    createUser(user, callback);
    updateUser(userId, user, callback);
    deleteUser(userId, callback);
}
```

### <a name="operation1"></a> init(refs, callback)

Initializes client references. This method is optional. It is used to set references 
to logger or performance counters.

**Arguments:**
- refs: References - references to other components 
  - log: ILog - reference to logger
  - countes: ICounters - reference to performance counters
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation2"></a> open(callback)

Opens connection to the microservice

**Arguments:**
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation3"></a> close(callback)

Closes connection to the microservice

**Arguments:**
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation4"></a> getUsers(filter, paging, callback)

Retrieves a list of users by specified criteria

**Arguments:** 
- filter: object - filter parameters
  - email: string - (optional) user email address
  - name: string - (optional) user full name
  - active: boolean - (optional) user active flag
  - lock: string - (optional) user lock flag
  - search: string - (optional) full-text search by name and email
- paging: object - paging parameters
  - paging: bool - (optiona) true to enable paging and return total count
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result
- callback: (err, page) => void - callback function
  - err: Error - occured error or null for success
  - page: UserPage - retrieved User objects in paged format

### <a name="operation5"></a> findUser(userId, email, callback)

Finds a user by unique id or email

**Arguments:** 
- userId: string - (optional) unique user id
- email: string - (optional) user primary email 
- callback: (err, user) => void - callback function
  - err: Error - occured error or null for success
  - user: User - User account or null if user wasn't found

### <a name="operation6"></a> getUserById(userId, callback)

Retrieves user account by its unique id. 
It throws an error when requested account is not found.

**Arguments:** 
- userId: string - unique user id
- callback: (err, user) => void - callback function
  - err: Error - occured error or null for success
  - user: User - created User account

### <a name="operation7"></a> createUser(user, callback)

Registers a new user in the system and creates an account for him.

**Arguments:** 
- user: User - user account info that includes
  - id: string - (optional) unique user id generated by the client
  - name: string - full user name
  - email: string - unique primary user email address
  - password: string - user password
  - ... - other optional user settings like time_zone, language or theme
- callback: (err, user) => void - callback function
  - err: Error - occured error or null for success
  - user: User - created User account
 
### <a name="operation8"></a> updateUser(userId, user, callback)

Changes user name, primary email or account settings.

**Arguments:** 
- userId: string - unique user id
- user: User - user account with new settings (partial updates are supported)
- callback: (err, user) => void - callback function
  - err: Error - occured error or null for success
  - user: User - updated User account

### <a name="operation9"></a> deleteUser(userId, callback)

Deletes user account from the system (use it carefully!)

**Arguments:** 
- userId: string - unique user id
- callback: (err, user) => void - callback function
  - err: Error - occured error or null for success
 
## <a name="client_rest"></a> UsersRestClient class

UsersRestClient is a client that implements HTTP/REST protocol

```javascript
class UsersRestClient extends RestClient implements IUsersClient {
    constructor(config?: any);
    init(refs, callback);
    open(callback);
    close(callback);
    getUsers(filter, paging, callback);
    findUser(userId, email, callback);
    getUserById(userId, callback);
    createUser(user, callback);
    updateUser(userId, user, callback);
    deleteUser(userId, callback);
}
```

**Constructor config properties:** 
- transport: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> UsersSenecaClient class

UsersSenecaClient is a client that implements Seneca protocol

```javascript
class UsersSenecaClient extends SenecaClient implements IUsersClient {
    constructor(config?: any);        
    init(refs, callback);
    open(callback);
    close(callback);
    getUsers(filter, paging, callback);
    findUser(userId, email, callback);
    getUserById(userId, callback);
    createUser(user, callback);
    updateUser(userId, user, callback);
    deleteUser(userId, callback);
}
```

**Constructor config properties:** 
- transport: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - type: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number
