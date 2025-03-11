import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Table from '@/src/components/Table';
import Indicator from '@/src/components/Indicator';
import MonitorFiltersForm from '@/src/components/forms/MonitorFiltersForm';
import { INDICATOR_CONSTANST } from '@/src/constants/IndicatorConstants';

const columns = {
  obligacion: "Obligación",
  declaracion: "Declaración",
  pago: "Pago",
  deudaPendiente: "Deuda Pendiente",
  detalle: "Detalle",
};

const data = [
  { id: "1", obligacion: "PDT IGV-RENTA MENSUAL -IEV", declaracion: 100, pago: 100, deudaPendiente: 0, detalle: "!" },
  { id: "2", obligacion: "PLANILLA ELECTRÓNICA", declaracion: 100, pago: 0, deudaPendiente: 0, detalle: "!" },
];

const MonitorScreen = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.subtitle}>Filtros</Text>
		<MonitorFiltersForm />
      </View>

      {/* Tabla de Declaraciones */}
      <View>
		<Text style={styles.subtitle}>Declaraciones y Pagos</Text>
		<Text>Última actualización: 19/02/2025</Text>
        <Table data={data} columns={columns} />
      </View>

      {/* Indicadores */}
      <View>
        <Text style={styles.subtitle}>Indicadores</Text>
        <View style={styles.indicatorsContainer}>
          {
            INDICATOR_CONSTANST.map(({text, color}, index) => (
              <Indicator textIndicator={text} colorIndicator={color} key={index} />
            ))
          }
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  	container: { 
		flex: 1, 
		padding: 10, 
		alignSelf:"center",
		width: "90%",
	},
  	subtitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginVertical: 15
	},
	indicatorsContainer: { 
		flexDirection: 'row', 
		alignItems: 'center', 
		gap: 20, 
		marginTop: 10, 
		marginBottom: 20, 
		flexWrap: "wrap" 
	},
});

export default MonitorScreen;
