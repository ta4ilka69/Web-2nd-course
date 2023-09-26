<?php header('Access-Control-Allow-Origin: *');
function validateY($y) {
    if (is_numeric($y)) {
        $y = floatval($y);
        if (-3 <= $y && $y <= 5) {
            return $y;
        }
    }
    return false; 
}

function validateR($r) {
    if (is_numeric($r)) {
        $r = floatval($r);
        if (2 <= $r && $r <= 5) {
            return $r;
        }
    }
    return false;
}

function validateX($x) {
    if (is_numeric($x)) {
        $x = floatval($x);
        if (-4 <= $x && $x <= 4) {
            return $x;
        }
    }
    return false;
}

if (isset($_GET['x']) && isset($_GET['y']) && isset($_GET['r'])) {
    $start_time = microtime(true);
    $x = validateX($_GET['x']);
    $y = validateY($_GET['y']);
    $r = validateR($_GET['r']);
    $result = "Failure";
    if ($x !== false && $y !== false && $r !== false) {
        if (isPointInside($x, $y, $r)) {
            $result = "Success";
        }
        $time = number_format((microtime(true) - $start_time) * 1000, 8);
        echo json_encode(array($x, $y, $r, $result, $time));
    } else {
        echo json_encode(array("error" => "Invalid input values"));
    }
}

function isPointInside($x, $y, $r)
{
    $ret = false;
    if ($x >= 0 && $y >= 0 && $y <= (-2) * $x + $r) {
        $ret = true;
    }
    if ($x <= 0 && $y >= 0 && $x ^ 2 + $y ^ 2 <= ($r / 2) ^ 2) {
        $ret = true;
    }
    if ($x <= 0 && $y <= 0 && $x >= -$r && $y >= (-$r / 2)) {
        $ret = true;
    }
    return $ret;
}