import { AppStyles } from "@theme";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    ...AppStyles.textInput,
    marginVertical: 10,
    marginHorizontal: 20,
  }
});