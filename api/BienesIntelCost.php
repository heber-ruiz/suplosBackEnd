<?php

class BienesIntelCost {
    private $data;

    function __construct() {
        $this->data = json_decode(file_get_contents(__DIR__ . '/../data-1.json'), true);
    }

    public function filter($city, $type){
        $filteredData = $this->data;
        
        if(!empty($city)){
            $filteredData = $this->filterCity($filteredData, $city);
        }

        if(!empty($type)){
            $filteredData = $this->filterType($filteredData, $type);
        }

        return $filteredData;
        
    }

    private function filterCity($filterData, $city){
        $result =[];
        foreach ($filterData as $i){
            if($i['Ciudad'] == $city){
                $result[] = $i;
            }
        }

        return $result;
    }

    private function filterType($filterData, $type){
        $result =[];
        foreach ($filterData as $i){
            if($i['Tipo'] == $type){
                $result[] = $i;
            }
        }
        return $result;
    }

    public function showCities(){
        $result =[];
        foreach ($this->data as $i){
            $result[] = $i['Ciudad'];
        }
        return array_values(array_unique($result));
    }

    public function showTypes(){
        $result =[];
        foreach ($this->data as $i){
            $result[] = $i['Tipo'];
        }
        return array_values(array_unique($result));
    }
}
