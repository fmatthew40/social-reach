const router = require('express').Router();

// const { User } = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    addUser,
    

} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(addUser)

router
//     .route('/:id')
//     .get(getUserById)
//     .delete(deleteUser)
//     .put(updateUser)

// router
//     .route("/:id/friends/:friendId")
//     .post(addFriend)
//     .delete(removeFriend);


    module.exports = router;