import { Container, Header, Content,Card,CardItem,Text,Body,Item,Icon,Input,AppRegistry,Image} from "native-base";

export const renderNext = (test_data) => {
    current++;
    return (
      <Card>
        <CardItem header button onPress={() => {
          // TODO: nav to item uid
          alert("Accessing " + test_data[current].recipeName)
        }}>
          {/* <Image source={{uri: test_data[current].img}} style={styles.image} /> */}
          <Text style={styles.title}>{test_data[current].recipeName+ ': '}</Text>
          <Text>{test_data[current].description}</Text>
        </CardItem>
      </Card>
    )
  }