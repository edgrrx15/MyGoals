import { StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/Goalinput';
import { useState } from 'react';
import { FlatList } from 'react-native-web';

export default function App() {

  const [goals, setGoals] = useState([])

  function handleAddGoal(enteredGoalText){
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random().toString()}])
    console.log(goals)
  }

  function handleDeleteGoal(){
    console.log('DELETE')
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={handleAddGoal}/>

      <View style={goalsContainer}>

        <FlatList
          data={goals}
          renderItem={ (itemData) =>{
            return(
              <GoalItem style={styles.goalsContainer}
                itemData={itemData}
                oneDeleteItem={handleDeleteGoal}
              />
            )
          }}
          keyExtractor = {(item) => {
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 5
  }
});
