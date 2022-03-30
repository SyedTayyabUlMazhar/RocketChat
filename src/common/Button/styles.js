import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#2a51d1',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 10,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 20,
    color: 'white',
  }
});