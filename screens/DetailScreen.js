// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, FlatList, TextInput } from 'react-native';

 const DetailScreen = ({ navigation }) => {}

//     const [movies, setMovies] = useState([]);
  
//     const getCrypto = async () => {
//       try {
//         const response = await fetch("https://data-imdb1.p.rapidapi.com/movie/order/upcoming/?page_size=50", {
//           "method": "GET",
//           "headers": {
//             "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
//             "x-rapidapi-key": "!!!!!!![VUL HIER Je EIGEN API KEY IN]!!!!!!!!"
//           }
//         })
//         const json = await response.json();
//         //console.log(json);
//         setMovies(json.results);
//       } catch (error) {
//         console.error(error);
//       }
//     }
  
//     useEffect(() => {
//       getCrypto();//toon upcomming movies bij begin scherm
//     }, []);
  
//     const getMoviesByTitleSearch = async (enteredText) => {//argument meegegeven door onChangeText
//       try {
//         if (enteredText.length > 3) {
//           const url = encodeURI("https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/" + enteredText + "/");
//           //console.log(url);
//           const response = await fetch(url, {
//             "method": "GET",
//             "headers": {
//               "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
//               "x-rapidapi-key": "!!!!!!![VUL HIER Je EIGEN API KEY IN]!!!!!!!!"
//             }
//           })
//           const json = await response.json();
//           // console.log(json);
//           setMovies(json.results);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
  
//     return (
//       <View style={styles.screen}>
//         <TextInput
//           placeholder="search keyword"
//           style={styles.input}
//           onChangeText={getMoviesByTitleSearch}//geeft argument enteredText mee, denk aan de goalInputHandler uit de goal app.
//         />
//         <FlatList
//           data={movies}
//           keyExtractor={item => item.imdb_id}
//           renderItem={({ item }) => (
//             <MovieItem
//               id={item.imdb_id}
//               title={item.title}
//               onSelectMovie={(selectedId) => { navigation.navigate('Details', { movieId: selectedId }) }}
//             /*
//               -> opgepast: indien je rechtstreeks navigation.navigate('Details') meegeeft zal je naar details gaan zodra deze component rendert, je moet dus in een functie wrappen! (zoals bij onDelete in de goals-app)
//               -> we geven de id van de geselecteerde film mee aan het details scherm, die wordt in het detailsScreen zelf opgevangen als route.params.movieId
//               -> opgepast2: je zou ook navigation kunnen meegeven aan de component via props en dan navigation.navigate('Details') aanroepen in de MovieItem component. Echter hoort navigatie thuis in ons scherm, omdat componenten afgeschermd en herbruikbaar zijn. Je zou de component misschien ook willen gebruiken in en ander scherm, waar hij naar ergens anders moet navigeren? Of helemaal niet moet navigeren, maar onPress iets anders moet doen. Dus navigatie hoort thuis in het screen en niet in de component, maar de component heeft natuurlijk wel de TouchableComponent met het onPress event dus je moet de link leggen door in de component naar props.onSelectMovie te verwijzen. Dat is een zelf gekozen naam, wil je het onJoske noemen? Be my guest.
//             */
//             />
//           )}
//         />
//       </View >
//     );
//   }
  
//   const styles = StyleSheet.create({
//     screen: {
//       padding: 50,
//     }
//   });
  export default DetailScreen;