import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const Form = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    return (
        <View>
            <Text>Altura</Text>
            <TextInput
              value={altura}
              onChangeText={setAltura}
              keyboardType='numeric'
              placeholder='Ex: 1.75'            
            />
            <Text>Peso</Text>
            <TextInput
              value={peso}
              onChangeText={setPeso}
              keyboardType='numeric'
              placeholder='Ex: 60'            
            />

            <Button
             onPress={() => {}}
             title="Calcular IMC"
             />
        </View>
    )
}

export default Form