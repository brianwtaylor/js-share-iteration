// const passport = require('passport');
// const facebookStrategy = require('passport-facebook');

// module.exports = function(pool) {
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     console.log('starting deserializeUser facebook user');

//     const queryText = 'select * from users where id = $1';

//     pool.query(queryText, [id])
//       .then(result => {
//         const user = result.rows[0]
//         console.log('deserialize facebook result: ')
//         console.log(user.id);

//         // passport deserialize done
//         done(null, user)
//       })
//       .catch(err => {
//         if (err) throw new Error(err);
//       })
//   });
//     passport.use(
//       new facebookStrategy({
//         clientID: process.env.facebookClientID,
//         clientSecret: process.env.facebookClientSecret,
//         callbackURL: '/auth/facebook/callback',
//         proxy: true
//       },
//       (accessToken, refreshToken, profile, done) => {
//         // this is where we upsert the profile id, name(screename), and primary email
//         const id = profile.id;
//         const name = profile.displayName;
//         const email = profile.email
//         console.log(profile)

//         const queryText = 'insert into users (id, name, email) ' +
//           'values ($1, $2, $3) ' +
//           'on conflict (id) do update set name=$2 ' +
//           'returning *';

//         console.log(pool);
//         pool.query(queryText, [id, name, email])
//           .then(result => {
//             console.log(result.rows);

//             console.log(result.rows)
//             const user = result.rows[0]
//             console.log('facebook auth:')
//             console.log(user.id)

//             // passport deserialize complete
//             done(null, user);
//           })
//           .catch(err => {
//             if (err) throw new Error(err);
//           }
//         );
//       }
//     )
//   )
// };