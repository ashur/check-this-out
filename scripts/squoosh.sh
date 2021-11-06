SOURCE=$1
OUTPUT_DIR=`dirname $SOURCE`

echo "JPG → AVIF"
squoosh-cli --resize '{"enabled":true,"width":657,"height":1328,"method":"lanczos3","fitMethod":"stretch","premultiply":true,"linearRGB":true}' --avif '{"cqLevel":33,"cqAlphaLevel":-1,"denoiseLevel":0,"tileColsLog2":0,"tileRowsLog2":0,"speed":6,"subsample":1,"chromaDeltaQ":false,"sharpness":0,"tune":0}' --output-dir $OUTPUT_DIR "$SOURCE.jpg"

echo "JPG → WebP"
squoosh-cli --resize '{"enabled":true,"width":657,"height":1328,"method":"lanczos3","fitMethod":"stretch","premultiply":true,"linearRGB":true}' --webp '{"quality":75,"target_size":0,"target_PSNR":0,"method":4,"sns_strength":50,"filter_strength":60,"filter_sharpness":0,"filter_type":1,"partitions":0,"segments":4,"pass":1,"show_compressed":0,"preprocessing":0,"autofilter":0,"partition_limit":0,"alpha_compression":1,"alpha_filtering":1,"alpha_quality":100,"lossless":0,"exact":0,"image_hint":0,"emulate_jpeg_size":0,"thread_level":0,"low_memory":0,"near_lossless":100,"use_delta_palette":0,"use_sharp_yuv":0}' --output-dir $OUTPUT_DIR "$SOURCE.jpg"

echo "JPG → JPG"
squoosh-cli --mozjpeg '{"quality":75,"baseline":false,"arithmetic":false,"progressive":true,"optimize_coding":true,"smoothing":0,"color_space":3,"quant_table":3,"trellis_multipass":false,"trellis_opt_zero":false,"trellis_opt_table":false,"trellis_loops":1,"auto_subsample":true,"chroma_subsample":2,"separate_chroma_quality":false,"chroma_quality":75}' --output-dir $OUTPUT_DIR "$SOURCE.jpg"
